<section class="webform" id="webform">
    <div class="webform__content">
        <h2 class="webform__title"><?php echo get_field('webform_title', 'options') ;?></h2>
        <p class="webform__subtitle"><?php echo get_field('webform_subtitle', 'options') ;?></p>
    </div>
    <div class="webform__form">
    <?php echo do_shortcode('[contact-form-7 id="271279b" title="Main form"]') ;?>
    </div>
</section>
<style>
    .webform::after {
        background-image: url(<?php echo get_template_directory_uri() . '/assets/images/form-bg.webp' ;?>);
    }
</style>