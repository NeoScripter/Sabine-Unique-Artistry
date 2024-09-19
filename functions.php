<?php

// Load stylesheets
function load_css()
{
    wp_enqueue_style('local-fonts', get_template_directory_uri() . '/assets/fonts/fonts.css', array(), null);
    wp_register_style('style', get_template_directory_uri() . '/assets/dist/css/styles.css', [], '1.0', 'all');
    wp_enqueue_style('style');
}
add_action('wp_enqueue_scripts', 'load_css');

// Load JavaScript
function load_js() {
    wp_register_script(
        'main-bundle',  // Handle
        get_template_directory_uri() . '/assets/dist/js/main.bundle.js',  // Path to the script
        [],  // Dependencies
        filemtime(get_template_directory() . '/assets/dist/js/main.bundle.js'),  // Version for cache busting
        true  // Load in footer
    );

    wp_enqueue_script('main-bundle');

    wp_script_add_data('main-bundle', 'defer', true);
}
add_action('wp_enqueue_scripts', 'load_js');


function enqueue_portfolio_search_scripts() {
    wp_enqueue_script('portfolio-search', get_template_directory_uri() . '/assets/dist/js/catalog.js', [], null, true);
    wp_localize_script('portfolio-search', 'portfolioSearch', array(
        'ajaxurl' => admin_url('admin-ajax.php')
    ));
}
add_action('wp_enqueue_scripts', 'enqueue_portfolio_search_scripts');

// Theme Options
add_theme_support('menus');
add_theme_support('post-thumbnails');
add_theme_support('widgets');

// Custom image sizes
add_image_size('desktop', 1200, 1200, false);
add_image_size('tablet', 750, 750, false);
add_image_size('mobile', 400, 400, false);
add_image_size('tiny', 20, 20, false);

// Creating a menu
function register_menus()
{
    register_nav_menus(
        array(
            'header-menu' => __( 'Header Menu' ),
            'footer-menu' => __( 'Footer Menu' )
        )
    );
}
add_action('init', 'register_menus');

// Adding svgs
function cc_mime_types($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');


function get_permalink_by_title($page_title)
{
    $page = get_posts([
        'post_type'   => 'page',
        'title'       => $page_title,
        'numberposts' => 1,
    ]);

    if ($page) {
        return get_permalink($page[0]->ID);
    }

    return '';
}

function get_permalink_by_slug($page_slug) {
    $page = get_posts([
        'post_type' => 'page',
        'name'      => $page_slug,
        'numberposts' => 1,
    ]);

    if ($page) {
        return get_permalink($page[0]->ID);
    }

    return '';
}

function custom_excerpt_length($length)
{
    return 30;
}
add_filter('excerpt_length', 'custom_excerpt_length');



function ajax_portfolio_search() {
    $filter = isset($_POST['filter']) ? sanitize_text_field($_POST['filter']) : 'all';
    $paged = (isset($_POST['paged']) && $_POST['paged'] > 0) ? intval($_POST['paged']) : 1;
    $items_per_page = isset($_POST['items_per_page']) ? intval($_POST['items_per_page']) : 15;

    $args = array(
        'post_type' => 'item',  
        'posts_per_page' => $items_per_page,
        'paged' => $paged,
        'orderby' => 'date',
        'order' => 'DESC',
    );

    if ($filter !== 'all') {
        $args['tax_query'] = array(
            array(
                'taxonomy' => 'item_type',
                'field'    => 'slug',
                'terms'    => $filter, 
            ),
        );
    }

    $project_query = new WP_Query($args);

    ob_start();

    if ($project_query->have_posts()) :
        while ($project_query->have_posts()) : $project_query->the_post(); ?>
            <div class="catalog__item">
                <div class="catalog__img-wrapper image-loading" style="background-image: url(<?php the_post_thumbnail_url('tiny'); ?>)">
                    <?php if (has_post_thumbnail()) : 
                        $thumbnail_id = get_post_thumbnail_id();
                        $alt_text = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);
                        if (empty($alt_text)) {
                            $alt_text = get_the_title();
                        }
                    ?>
                    <img src="<?php the_post_thumbnail_url('tablet'); ?>" alt="<?php echo esc_attr($alt_text); ?>" class="catalog__image" loading="lazy">
                    <?php endif; ?>
                </div>
                <div class="catalog__description">
                    <div class="catalog__item-name"><?php echo esc_html(get_the_title()); ?></div>
                    <a href="<?php the_permalink(); ?>" class="catalog__item-link">More details</a>
                </div>
            </div>
        <?php endwhile;
    else :
        echo '<p>No items found.</p>';
    endif;

    $grid_content = ob_get_clean();

    ob_start();

    // Pagination
    echo paginate_links(array(
        'total' => $project_query->max_num_pages,
        'current' => $paged,
        'format' => '?paged=%#%',
        'prev_text' => '',
        'next_text' => '',
    ));

    $pagination_content = ob_get_clean();

    wp_reset_postdata();

    // Return the grid and pagination content
    wp_send_json_success(array(
        'grid' => $grid_content,
        'pagination' => $pagination_content
    ));

    die();
}

add_action('wp_ajax_portfolio_search', 'ajax_portfolio_search');
add_action('wp_ajax_nopriv_portfolio_search', 'ajax_portfolio_search');
