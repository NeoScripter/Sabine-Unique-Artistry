<section class="contact">
    <div class="contact__header">
        <h2 class="contact__title">Contact Sabine's Unique Artistry</h2>
        <p class="contact__description"><?php echo get_field('contact_description', 'options') ;?></p>
    </div>
    <div class="contact__image">
        <img
            loading="lazy"
            src="<?php echo get_field('contact_image', 'options')['sizes']['tablet']; ?>"
            alt="<?php echo get_field('contact_image', 'options')['alt']; ?>"
            sizes="(min-width: 90rem) 29rem, 
           (min-width: 75rem) 50vw, 
           (min-width: 48rem) 100vw, 
           100vw"
            srcset="
            <?php echo get_field('contact_image', 'options')['sizes']['mobile']; ?> 400w, 
            <?php echo get_field('contact_image', 'options')['sizes']['tablet']; ?> 720w,
            <?php echo get_field('contact_image', 'options')['sizes']['desktop']; ?> 1200w
            ">
    </div>
    <div class="contact__info">
        <div class="contact__subgroup">
            <h3 class="contact__subheading">Contacts</h3>
            <a href="<?php echo get_field('phone_number', 'options')['url'] ;?>" target="_blank" class="contact__link"><?php echo get_field('phone_number', 'options')['title'] ;?></a>
            <a href="<?php echo get_field('email', 'options')['url'] ;?>" target="_blank" class="contact__link"><?php echo get_field('email', 'options')['title'] ;?></a>
        </div>
        <div class="contact__subgroup">
            <h3 class="contact__subheading">Address</h3>
            <p class="contact__text"><?php echo get_field('address', 'options') ;?></p>
        </div>
        <div class="contact__subgroup">
            <h3 class="contact__subheading">Social Media</h3>
            <div class="contact__social-links">
                <a href="<?php echo get_field('whatsapp_link', 'options') ;?>" class="contact__social-icon">
                    <img src="<?php echo get_template_directory_uri() . '/assets/svgs/whatsapp.svg' ;?>" alt="whatsapp">
                </a>
                <a href="<?php echo get_field('youtube_link', 'options') ;?>" class="contact__social-icon">
                    <img src="<?php echo get_template_directory_uri() . '/assets/svgs/youtube.svg' ;?>" alt="youtube">
                </a>
            </div>
        </div>
    </div>
</section>