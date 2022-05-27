<?php

function hockeyshop_create_menu_name($level) {
    return strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $level)));
}

function get_hockeyshop_menu_holder() {
    ?>
    <div class="hbdv_megamenu relative  p-5 lg:static  flex-grow lg:flex  lg:p-0 lg:justify-center lg:items-center lg:w-full">
                <?php
                if( have_rows('hbdv_mega_primary_levels', 'option') ):  
                    while( have_rows('hbdv_mega_primary_levels', 'option') ): the_row();
                    $url=get_sub_field('hbdv_mega_primary_level_url');
                    $title=get_sub_field('hbdv_mega_primary_level_title');
                    $id='MegaMenu --- '. get_sub_field('hbdv_mega_primary_level_id');
                    $name=hockeyshop_create_menu_name($id);
                    ?>
                    <div class="hbdv_megamenu__primary drop_down">
                        <a class="hbdv_megamenu__primary--btn btn" href="<?php echo $url; ?>"><?php echo $title; ?></a>
                        
                    <?php    
                        wp_nav_menu( array(
                            'theme_location' => $name,
                            'container_class' => 'hbdv_megamenu__secondary item',
                            'menu_class' => 'hbdv_megamenu__secondary--list'
                        ) );
                        ?>
                        </div>
                        <?php
                    endwhile;
                endif;
                ?>
            </div>


    <?php

}

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


function get_hockeyshop_main_menu() { ?>
    <!-- HTML START HERE -->
    <section>

        <other>
            <h1>Some stuff here</h1>
        </other>

        <div class="example---nesing">
            <!-- NAVIGATION MENU STARTS -->
            <?php echo get_hockeyshop_menu_holder();?>
            <!-- NAVIGATION MENU ENDS -->
        </div>

    </section>
    <!-- HTML END HERE -->
    <?php
}






