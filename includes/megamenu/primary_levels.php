<?php

function get_hockeyshop_primary_levels() {
    $levels = array();
    if( have_rows('hbdv_mega_primary_levels', 'option') ):  
        while( have_rows('hbdv_mega_primary_levels', 'option') ): the_row();
        // $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $string)));
           $name='MegaMenu --- '. get_sub_field('hbdv_mega_primary_level_id');
           array_push($name);       
        endwhile;  
    endif;
    print_r($levels);
}
add_shortcode( 'foobar', 'get_hockeyshop_primary_levels' );

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




