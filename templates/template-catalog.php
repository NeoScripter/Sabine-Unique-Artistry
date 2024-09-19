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
    <div class="catalog__search-wrapper">
        <input type="text" id="portfolioSearch" placeholder="Поиск по проектам..." class="portfolio__search">
    </div>

    <div class="catalog__grid" id="portfolioGrid">
        <!-- Portfolio items will be dynamically loaded here via AJAX -->
    </div>

    <!-- Pagination -->
    <div class="catalog__pagination" id="portfolioPagination">
        <!-- Pagination links will be dynamically loaded here via AJAX -->
    </div>
</section>

<?php get_template_part('includes/section','webform'); ?>
<?php get_template_part('includes/section','contact'); ?>

<?php get_footer(); ?>