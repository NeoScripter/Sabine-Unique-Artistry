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
            <div class="header__popup">
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
                    <a href="" class="header__social">
                        <img src="<?php echo get_template_directory_uri() . '/assets/svgs/whatsapp.svg' ;?>" alt="whatsapp">
                    </a>
                    <a href="" class="header__social">
                        <img src="<?php echo get_template_directory_uri() . '/assets/svgs/youtube.svg' ;?>" alt="youtube">
                    </a>
                </div>

                <div class="header__contact-group">
                    <h3 class="header__contact-title">Contact</h3>
                    <a href="" class="header__contact">+1 (000) 000-00-00</a>
                    <a href="" class="header__contact">sa.65077361@gmail.com</a>
                </div>

                <button class="header__call-btn">
                    Contact us
                    <img src="<?php echo get_template_directory_uri() . '/assets/svgs/arrow-top.svg' ;?>" alt="arrow pointing to the top right">
                </button>

                <div class="header__theme-group">
                    <div class="header__theme-toggle"></div>
                    <h4 class="header__theme-title">Switch to light mode</h4>
                </div>
            </div>

            <div class="header__contacts">
                <div class="header__info">
                    <a href="" class="header__link">+1 (000) 000-00-00</a>
                    <a href="" class="header__link">sa.65077361@gmail.com</a>
                </div>
                <div class="header__whatsapp">
                <?php include get_template_directory() . '/assets/svgs/whatsapp-main.svg' ;?>
                </div>
            </div>

            <div class="header__toggle">
                <div class="header__theme">
                    toggle theme
                </div>
                <button class="header__popup-open" id="header-popup-open">
                    <img src="<?php echo get_template_directory_uri() . '/assets/svgs/burger-open.svg' ;?>" alt="Open burger menu">
                </button>
            </div>
        </header>