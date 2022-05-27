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


function get_hockeyshop_main_menu() {
    <div class="hbdv_megamenu--primary">
    <?php
    if( have_rows('hbdv_mega_primary_levels', 'option') ):  
        ?>
        <ul class="menu">
        <?php
        while( have_rows('hbdv_mega_primary_levels', 'option') ): the_row();
           $url=get_sub_field('hbdv_mega_primary_level_url');
           $title=get_sub_field('hbdv_mega_primary_level_title');
           ?>
            <li class="menu-item menu-item-type-custom menu-item-object-custom">
              <a href="<?php $url; ?>"><?php $title; ?></a>
            </li>
           <?php    
        endwhile;  ?>
        <ul class="menu">
        <?php
    endif;
    ?>
    </div>
    <?php
}



