<?php

function get_hockeyshop_primary_levels() {
    $levels = array();
    if( have_rows('hbdv_mega_primary_levels', 'option') ):  
        while( have_rows('hbdv_mega_primary_levels', 'option') ): the_row();
           $name='MegaMenu --- '. get_sub_field('hbdv_mega_primary_level_id');
           array_push($levels,$name);       
        endwhile;  
    endif;
    return $levels;
}
add_shortcode( 'foobar', 'get_hockeyshop_primary_levels' );

function get_hockeyshop_primary_levels_menus() {
    $levels=get_hockeyshop_primary_levels();
    foreach ($levels as $level) {
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $level)));
        register_nav_menu( $slug, __( $level, 'hockeyshop-theme' ) );
    }

}
//[foobar]
function foobar_func( $atts ){ ?>
	<?php if( have_rows('hbdv_mega_primary_levels', 'option') ): ?>

        <ul>
        
        <?php while( have_rows('hbdv_mega_primary_levels', 'option') ): the_row(); ?>
        
            <li><a href="<?php the_sub_field('hbdv_mega_primary_level_url'); ?>"><?php the_sub_field('hbdv_mega_primary_level_title'); ?></a></li>
        
        <?php endwhile; ?>
        
        </ul>
        
        <?php endif; ?>
        <?php
}
add_shortcode( 'foobarx', 'foobar_func' );




