<?php get_header(); ?>

<section class="hero">
    <div class="hero__content">
        <h2 class="hero__name">Unique Artistry</h2>
        <h1 class="hero__headline"><?php echo get_field('hero_headline'); ?></h1>
        <button class="hero__button">
            Contact Us
            <img src="<?php echo get_template_directory_uri() . '/assets/svgs/arrow-top.svg' ;?>" alt="arrow pointing to the top right">
        </button>
    </div>
    <div class="hero__intro">
        <h4 class="hero__greeting">Welcome to Sabine's Unique Artistry!</h4>
        <p class="hero__description"><?php echo get_field('hero_description'); ?></p>
    </div>
    <div class="hero__image image-loading" style="background-image: url(<?php echo get_field('hero_image')['sizes']['tiny'] ;?>)">
        <img
            loading="lazy"
            src="<?php echo get_field('hero_image')['sizes']['tablet']; ?>"
            alt="<?php echo get_field('hero_image')['alt']; ?>"
            sizes="(min-width: 90rem) 45rem, 
           (min-width: 75rem) 45rem, 
           (min-width: 48rem) 45rem, 
           24rem"
            srcset="
            <?php echo get_field('hero_image')['sizes']['mobile']; ?> 400w, 
            <?php echo get_field('hero_image')['sizes']['tablet']; ?> 720w,
            <?php echo get_field('hero_image')['sizes']['desktop']; ?> 1200w
        ">
    </div>
</section>

<section class="categories">
    <h2 class="categories__title">Catalog</h2>
    <div class="categories__list">
        <a href="" class="categories__item" data-tags="figurines">
            <?php include get_template_directory() . '/assets/svgs/gallery-1.svg'; ?>
            <p class="categories__item-text">Figurines & Characters</p>
        </a>
        <a href="" class="categories__item" data-tags="planters">
            <?php include get_template_directory() . '/assets/svgs/gallery-2.svg'; ?>
            <p class="categories__item-text">Planters</p>
        </a>
        <a href="" class="categories__item" data-tags="installations">
            <?php include get_template_directory() . '/assets/svgs/gallery-3.svg'; ?>
            <p class="categories__item-text">Architectural Installations</p>
        </a>
    </div>
</section>

<section class="gallery">
    <div class="gallery__group">
        <div class="gallery__header">
            <h3 class="gallery__group-title">Figurines & Characters</h3>
            <div class="gallery__controls">
                <button class="gallery__control-btn gallery__control-btn--prev"></button>
                <button class="gallery__control-btn gallery__control-btn--next"></button>
            </div>
        </div>
        <div class="gallery__carousel">
            <div class="gallery__carousel-item">
                <div class="gallery__image-wrapper">
                    <img src="" alt="">
                </div>
                <div class="gallery__item-name">Name</div>
                <a href="" class="gallery__item-link">More details</a>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>