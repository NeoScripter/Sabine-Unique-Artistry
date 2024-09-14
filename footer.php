<footer class="footer">
    <?php
    wp_nav_menu(
        array(
            'theme_location' => 'footer-menu',
            'container'      => 'nav',
            'container_class' => 'footer__nav',
            'menu_class'     => 'footer__ul',
            'fallback_cb'    => false,
        )
    );
    ?>
    <div class="footer__logo">
        Sabine's Unique Artistry
    </div>
    <div class="footer__flex">
        <p class="footer__copyright">©2024 Sabine's Unique Artistry</p>
        <a href="<?php echo get_permalink_by_slug('privacy-policy') ;?>" target="_blank" class="footer__privacy-link">Privacy Policy</a>
    </div>
    <a href="" class="footer__scroll-link">
        Scroll to top
        <?php include get_template_directory() . '/assets/svgs/arrow-top.svg'; ?>
    </a>
</footer>
</div>
<?php wp_footer(); ?>
</body>

</html>