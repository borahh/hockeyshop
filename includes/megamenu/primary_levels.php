<?php

function get_hockeyshop_primary_menus() {
    $levels = array();
    if( have_rows('hbdv_mega_primary_levels', 'option') ):  
        while( have_rows('hbdv_mega_primary_levels', 'option') ): the_row();
           $name='MegaMenu --- '. get_sub_field('hbdv_mega_primary_level_id');
           array_push($levels,$name);       
        endwhile;  
    endif;
    return $levels;
}

function get_hockeyshop_primary_levels() {
    
    if( have_rows('hbdv_mega_primary_levels', 'option') ):  
        while( have_rows('hbdv_mega_primary_levels', 'option') ): the_row();
           $title=get_sub_field('hbdv_mega_primary_level_title');
           $url=get_sub_field('hbdv_mega_primary_level_url');
           $id=get_sub_field('hbdv_mega_primary_level_id');
           echo $title.$url.$id;    
        endwhile;  
    endif;
    return $levels;
}

function foobar_func( $atts ){ 
    print_r(get_hockeyshop_primary_levels());
}
add_shortcode( 'foobarx', 'foobar_func' );




