<?php get_header(); ?>

<?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>

        <nav class="breadcrumbs">
            <ul class="breadcrumbs__ul">
                <li><a href="<?php echo get_home_url(); ?>" class="breadcrumbs__link">HOME</a></li>
                <li>//</li>
                <li><a href="<?php echo get_home_url() . '/catalog'; ?>" class="breadcrumbs__link">CATALOG</a></li>
                <li>//</li>
                <li class="breadcrumbs__link"><?php the_title(); ?></a></li>
            </ul>
        </nav>

        <section class="item">
            <div class="item__gallery">
                <?php if (has_post_thumbnail()) : ?>
                    <?php
                    $thumbnail_id = get_post_thumbnail_id();

                    $alt_text = get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true);

                    if (empty($alt_text)) {
                        $alt_text = get_the_title();
                    }; ?>
                    <div class="item__hero image-loading" style="background-image: url(<?php the_post_thumbnail_url('tiny'); ?>)">
                        <img id="item-hero" src="<?php the_post_thumbnail_url('large'); ?>" alt="<?php echo esc_attr($alt_text); ?>" loading="lazy">
                    </div>
                <?php endif; ?>
                <?php
                $images = get_field('item_gallery');

                if ($images): ?>
                    <div class="item__carousel">
                        <?php foreach ($images as $image): ?>
                            <div class="item__image">
                                <img src="<?php echo esc_url($image['sizes']['large']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                            </div>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>
            <div class="item__content">
                <h1 class="item__title"><?php the_title(); ?></h1>
                <h2 class="item__article"><?php echo get_field('item_article'); ?></h2>
                <h3 class="item__price"><?php echo get_field('item_price'); ?></h3>
                <div class="item__description">
                    <?php the_content(); ?>
                </div>
                <div class="item__params">
                    <?php if (have_rows('item_parameters')): while (have_rows('item_parameters')): the_row(); ?>
                            <div class="item__param-group">
                                <div class="item__param-name"><?php the_sub_field('item_parameter_name'); ?></div>
                                <div class="item__param-value"><?php the_sub_field('item_parameter_value'); ?></div>
                            </div>
                    <?php endwhile;
                    endif; ?>
                </div>
                <button class="item__btn">
                    Order now
                    <?php include get_template_directory() . '/assets/svgs/arrow-top.svg'; ?>
                </button>
            </div>
        </section>

    <?php endwhile; ?>
<?php endif; ?>

<div class="item__popup-overlay">
    <div class="item__popup">
        <section class="webform">
            <div class="webform__content">
                <h2 class="webform__title">
                    <?php echo get_field('order_form_title', 'options'); ?>

                    <button class="webform__close-popup">
                        <img src="<?php echo get_template_directory_uri() . '/assets/images/close-popup.svg'; ?>" alt="close button">
                    </button>
                </h2>
                <p class="webform__subtitle"><?php echo get_field('order_form_paragraph', 'options'); ?></p>
            </div>
            <div class="webform__form">
                <?php echo do_shortcode('[contact-form-7 id="271279b" title="Main form"]'); ?>
            </div>
        </section>
    </div>
</div>

<?php get_template_part('includes/section', 'webform'); ?>

<?php get_footer(); ?>