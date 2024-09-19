document.addEventListener('DOMContentLoaded', function() {
    loadProjects();

    // Event listener for search input
    document.getElementById('portfolioSearch').addEventListener('keyup', function() {
        loadProjects(this.value);
    });

    // Event delegation for pagination links
    document.addEventListener('click', function(e) {
        if (e.target.closest('.catalog__pagination a')) {
            e.preventDefault();
            
            const paged = e.target.getAttribute('href').split('paged=')[1];  
            const search = document.getElementById('portfolioSearch').value;

            loadProjects(search, paged);
        }
    });

    // Function to load projects
    function loadProjects(search = '', paged = 1) {
        fetch(portfolioSearch.ajaxurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                action: 'portfolio_search',
                search: search,
                paged: paged,
            })
        })
        .then(response => response.json())
        .then(response => {
            if (response.success) {
                document.getElementById('portfolioGrid').innerHTML = response.data.grid;  
                document.getElementById('portfolioPagination').innerHTML = response.data.pagination;
                imageLoading();
            } else {
                document.getElementById('portfolioGrid').innerHTML = '<p>Произошла ошибка при загрузке проектов.</p>';
                document.getElementById('portfolioPagination').innerHTML = '';  
            }
        })
        .catch(() => {
            document.getElementById('portfolioGrid').innerHTML = '<p>Произошла ошибка при загрузке проектов.</p>';
        });
    }
});

// Image loading function
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
