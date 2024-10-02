document.addEventListener('DOMContentLoaded', function() {
    let currentFilter = 'all';
    let itemsPerPage = getItemsPerPage(); 

    const urlParams = new URLSearchParams(window.location.search);
    const urlFilter = urlParams.get('filter');
    
    if (urlFilter) {
        currentFilter = urlFilter; 
    }

    loadProjects(currentFilter, 1, itemsPerPage); 
    updateActiveBtns();

    document.querySelectorAll('.catalog__filter-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            currentFilter = this.getAttribute('data-filter'); 
            loadProjects(currentFilter, 1, itemsPerPage); 
            updateActiveBtns();
        });
    });

    document.addEventListener('click', function(e) {
        if (e.target.closest('.catalog__pagination a')) {
            e.preventDefault();
            const paged = e.target.getAttribute('href').split('paged=')[1];
            loadProjects(currentFilter, paged, itemsPerPage);
        }
    });

    function loadProjects(filter = 'all', paged = 1, itemsPerPage = 15) {
        fetch(portfolioSearch.ajaxurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                action: 'portfolio_search',
                filter: filter, 
                paged: paged, 
                items_per_page: itemsPerPage, 
            })
        })
        .then(response => response.json())
        .then(response => {
            if (response.success) {
                document.getElementById('catalog__display').innerHTML = response.data.grid;
                document.getElementById('catalog__pagination').innerHTML = response.data.pagination;
                imageLoading(); 
            } else {
                document.getElementById('catalog__display').innerHTML = '<p>No items found.</p>';
                document.getElementById('catalog__pagination').innerHTML = '';
            }
        })
        .catch(() => {
            document.getElementById('catalog__display').innerHTML = '<p>Error loading projects.</p>';
        });
    }

    function getItemsPerPage() {
        return window.innerWidth > 768 ? 30 : 15; 
    }

    function removeActiveClasses(currentBtn) {
        document.querySelectorAll('.catalog__filter-btn').forEach(function(button) {
            if (button !== currentBtn) {
                button.classList.remove('catalog__filter-btn--active');
            }
        });
    }

    function updateActiveBtns() {
        const selectedFilter = document.querySelector(`.catalog__filter-btn[data-filter="${currentFilter}"]`);
        removeActiveClasses(selectedFilter);
        selectedFilter.classList.add('catalog__filter-btn--active');
    }

    window.addEventListener('resize', function() {
        itemsPerPage = getItemsPerPage(); 
        loadProjects(currentFilter, 1, itemsPerPage); 
    });

    function imageLoading() {
        document.querySelectorAll('.image-loading').forEach(function(imageWrapper) {
            const image = imageWrapper.querySelector('img');
            function loaded() {
                imageWrapper.classList.add('image-loaded');
            }
            if (image.complete) {
                loaded();
            } else {
                image.addEventListener('load', loaded);
            }
        });
    }
});
