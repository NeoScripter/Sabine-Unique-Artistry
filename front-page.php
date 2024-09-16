<?php get_header(); ?>

<section class="hero">
    <div class="hero__content">
        <h2 class="hero__name">Unique Artistry</h2>
        <h1 class="hero__headline"><?php echo get_field('hero_headline'); ?></h1>
        <button class="hero__button">
            Contact Us
            <img src="<?php echo get_template_directory_uri() . '/assets/svgs/arrow-top.svg'; ?>" alt="arrow pointing to the top right">
        </button>
    </div>
    <div class="hero__intro">
        <h4 class="hero__greeting">Welcome to Sabine's Unique Artistry!</h4>
        <p class="hero__description"><?php echo get_field('hero_description'); ?></p>
    </div>
    <div class="hero__image image-loading" style="background-image: url(<?php echo get_field('hero_image')['sizes']['tiny']; ?>)">
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
    <?php
    $item_types = get_terms(array(
        'taxonomy'   => 'item_type',
        'hide_empty' => true,
        'orderby'  => 'id',
        'order'    => 'ASC',
    ));

    if (! empty($item_types) && ! is_wp_error($item_types)) :
        foreach ($item_types as $item_type) :
            $args = array(
                'post_type'      => 'item',
                'posts_per_page' => -1, 
                'tax_query'      => array(
                    array(
                        'taxonomy' => 'item_type',
                        'field'    => 'term_id',
                        'terms'    => $item_type->term_id,
                    ),
                ),
            );

            $query = new WP_Query($args);

            if ($query->have_posts()) :
                $post_count = 0;
    ?>

                <div class="gallery__group">
                    <div class="gallery__header">
                        <h3 class="gallery__group-title"><?php echo esc_html($item_type->name); ?></h3>
                        <div class="gallery__controls">
                            <button class="gallery__control-btn gallery__control-btn--prev">
                                <?php include get_template_directory() . '/assets/svgs/gallery-prev.svg'; ?>
                            </button>
                            <button class="gallery__control-btn gallery__control-btn--next">
                                <?php include get_template_directory() . '/assets/svgs/gallery-next.svg'; ?>
                            </button>
                        </div>
                    </div>

                    <div class="gallery__carousel">
                        <?php
                            while ($query->have_posts()) : $query->the_post();
                                $post_count++;

                                $additional_class = '';
                                if ($post_count > 3) {
                                    $additional_class = ' gallery__carousel-item--hidden';
                                }
                            ?>
                            <div class="gallery__carousel-item<?php echo esc_attr($additional_class); ?>">
                                <div class="gallery__image-wrapper image-loading" style="background-image: url(<?php echo esc_url( get_the_post_thumbnail_url( $post->ID, 'tiny' ) ) ;?>)">
                                    <?php if (has_post_thumbnail()) : ?>
                                        <?php
                                        $thumbnail_id = get_post_thumbnail_id($post->ID);
                                        $thumbnail_url = wp_get_attachment_image_src($thumbnail_id, 'tablet');
                                        $thumbnail_alt = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);
                                        if (empty($thumbnail_alt)) {
                                            $thumbnail_alt = get_the_title();
                                        }
                                        ?>
                                        <img src="<?php echo esc_url($thumbnail_url[0]); ?>" alt="<?php echo esc_attr($thumbnail_alt); ?>" loading="lazy">
                                    <?php endif; ?>
                                </div>
                                <div class="gallery__item-text">
                                    <div class="gallery__item-name"><?php echo esc_html(get_the_title()); ?></div>
                                    <a href="<?php the_permalink(); ?>" class="gallery__item-link">More details</a>
                                </div>
                            </div>
                        <?php endwhile; ?>
                    </div>
                </div>
    <?php wp_reset_postdata(); endif; endforeach; endif; ?>
    <a href="" class="gallery__link">
        see the catalog
        <img src="<?php echo get_template_directory_uri() . '/assets/svgs/arrow-top.svg' ;?>" alt="arrow pointing to the top right">
    </a>
</section>

<section class="about">
    <div class="about__content">
        <h2 class="about__title">About us</h2>
        <p class="about__description">We are a team of creative professionals specializing in crafting impressive works of art from a diverse range of materials, from plaster and clay to premium bronze. Our passion for creating unique forms is evident in every detail, making our sculptures and miniatures distinctive and appealing.</p>
        <h3 class="about__services-heading">Services</h3>
        <div class="about__services-list">
            <div class="about__service">
                <div class="about__service-header">
                    <div class="about__service-number">01</div>  
                    <h4 class="about__service-name">Individual orders</h4>         
                </div>
                <div class="about__service-description">
                    Clients can order unique sculptures and miniatures according to their own designs and preferences.
                </div>
            </div>
        </div>
    </div>
    <div class="about__image">
        <img
            loading="lazy"
            src="<?php echo get_field('about_us_image')['sizes']['tablet']; ?>"
            alt="<?php echo get_field('about_us_image')['alt']; ?>"
            sizes="(min-width: 90rem) 45rem, 
           (min-width: 75rem) 30rem, 
           (min-width: 48rem) 45rem, 
           45rem"
            srcset="
            <?php echo get_field('hero_image')['sizes']['mobile']; ?> 400w, 
            <?php echo get_field('hero_image')['sizes']['tablet']; ?> 720w,
            <?php echo get_field('hero_image')['sizes']['desktop']; ?> 1200w
        ">
    </div>
    <div class="about__summary">
        <div class="about__summary-image">
            <img src="" alt="">
        </div>
        <p class="about__summary-text">
            We gladly offer both ready-made items and custom orders, bringing to life our clients' boldest ideas. Whether it's an interior decoration, a gift with special significance, or a business ambiance enhancer, we are ready to turn your dreams into reality.
        </p>
    </div>
</section>


<?php get_footer(); ?>