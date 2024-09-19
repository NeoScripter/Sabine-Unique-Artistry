<?php
/**
 * Template Name: Catalog
 */
?>

<?php get_header(); ?>

<nav class="breadcrumbs">
    <ul class="breadcrumbs__ul">
        <li><a href="<?php echo get_home_url() ;?>" class="breadcrumbs__link">HOME</a></li>
        <li>//</li>
        <li><a href="<?php echo get_home_url() . '/catalog' ;?>" class="breadcrumbs__link">CATALOG</a></li>
    </ul>
</nav>

<section class="catalog">
    <div class="catalog__filter-wrapper">
        <button class="catalog__filter-btn" data-filter="all">Show All</button>
        <button class="catalog__filter-btn" data-filter="installations">Installations</button>
        <button class="catalog__filter-btn" data-filter="figurines">Figurines</button>
        <button class="catalog__filter-btn" data-filter="planters">Planters</button>
    </div>

    <div class="catalog__grid" id="catalog__display">
        <!-- Portfolio items will be dynamically loaded here via AJAX -->
    </div>

    <!-- Pagination -->
    <div class="catalog__pagination" id="catalog__pagination">
        <!-- Pagination links will be dynamically loaded here via AJAX -->
    </div>
</section>

<?php get_template_part('includes/section','webform'); ?>
<?php get_template_part('includes/section','contact'); ?>

<?php get_footer(); ?>