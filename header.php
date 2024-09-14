<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <div class="wrapper">
        <header class="header">
            <div class="header__logo">Sabine's Unique Artistry</div>
            <div class="header__popup header__popup--hidden">
                <div class="header__mobile-group">
                    <div class="header__mobile-logo">Sabine's Unique Artistry</div>
                    <button class="header__close-btn" id="header-popup-close">
                       <img src="<?php echo get_template_directory_uri() . '/assets/svgs/burger-close.svg' ;?>" alt="Close burger menu">
                    </button>
                </div>

                <?php
                wp_nav_menu(
                    array(
                        'theme_location' => 'header-menu',
                        'container'      => 'nav',
                        'container_class' => 'header__nav',
                        'menu_class'     => 'header__ul',
                        'fallback_cb'    => false,
                    )
                );
                ?>
                <div class="header__socials">
                    <a href="<?php echo get_field('whatsapp_link', 'options') ;?>" target="_blank" class="header__social">
                        <img src="<?php echo get_template_directory_uri() . '/assets/svgs/whatsapp.svg' ;?>" alt="whatsapp">
                    </a>
                    <a href="<?php echo get_field('youtube_link', 'options') ;?>" target="_blank" class="header__social">
                        <img src="<?php echo get_template_directory_uri() . '/assets/svgs/youtube.svg' ;?>" alt="youtube">
                    </a>
                </div>

                <div class="header__contact-group">
                    <h3 class="header__contact-title">Contacts</h3>
                    <a href="<?php echo get_field('phone_number', 'options')['url'] ;?>" target="_blank" class="header__contact"><?php echo get_field('phone_number', 'options')['title'] ;?></a>
                    <a href="<?php echo get_field('email', 'options')['url'] ;?>" target="_blank" class="header__contact"><?php echo get_field('email', 'options')['title'] ;?></a>
                </div>
                

                <button class="header__call-btn">
                    Contact us
                    <img src="<?php echo get_template_directory_uri() . '/assets/svgs/arrow-top.svg' ;?>" alt="arrow pointing to the top right">
                </button>

                <div class="header__theme-group">
                    <div class="header__theme-toggle">
                        <input type="checkbox" id="dark-mode-mobile" class="header__theme-toggle">
                        <label for="dark-mode-mobile">Light Mode</label>
                    </div>
                    <h4 class="header__theme-title">Switch to light mode</h4>
                </div>
            </div>

            <div class="header__contacts">
                <div class="header__info">
                    <a href="<?php echo get_field('phone_number', 'options')['url'] ;?>" target="_blank" class="header__link"><?php echo get_field('phone_number', 'options')['title'] ;?></a>
                    <a href="<?php echo get_field('email', 'options')['url'] ;?>" target="_blank" class="header__link"><?php echo get_field('email', 'options')['title'] ;?></a>
                </div>
                <a href="" target="_blank" class="header__whatsapp">
                <?php include get_template_directory() . '/assets/svgs/whatsapp-main.svg' ;?>
                </a>
            </div>

            <div class="header__toggle">
                <div class="header__theme">
                    <input type="checkbox" id="dark-mode" class="header__theme-toggle">
                    <label for="dark-mode">Light Mode</label>
                </div>
                <button class="header__popup-open" id="header-popup-open">
                    <img src="<?php echo get_template_directory_uri() . '/assets/svgs/burger-open.svg' ;?>" alt="Open burger menu">
                </button>
            </div>
        </header>