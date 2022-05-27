<?php

function hockeyshop_create_menu_name($level) {
    return strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $level)));
}

function get_hockeyshop_menu_holder() {
    ?>
     <div class="menu item  overflow-y-scroll lg:overflow-visible overflow-x-hidden  flex flex-col lg:bg-[#1d1d1d] ">
                <div class=' p-3 px-5 flex justify-between lg:hidden'>
                    <button class="flex items-center gap-2 hidden" id='back_btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Back
                    </button>
                </div>
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






