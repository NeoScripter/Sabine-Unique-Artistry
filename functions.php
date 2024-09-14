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
