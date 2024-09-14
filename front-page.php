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
            src="<?php echo get_field('hero_image')['sizes']['tablet']; ?>"
            alt="<?php echo get_field('hero_image')['alt']; ?>"
            sizes="(min-width: 90rem) 45rem, 
           (min-width: 75rem) 45rem, 
           (min-width: 48rem) 45rem, 
           24rem"
            srcset="
            <?php echo get_field('hero_image')['sizes']['mobile']; ?> 400w, 
            <?php echo get_field('hero_image')['sizes']['tablet']; ?> 720w
        ">
    </div>
</section>

<?php get_footer(); ?>