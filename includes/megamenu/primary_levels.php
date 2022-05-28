<?php

function hockeyshop_create_menu_name($level) {
    return strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $level)));
}

function get_hockeyshop_menu_holder() {
    ?>  <nav class="  w-full bg-[#111111] fixed lg:static left-0 top-0 z-50">
    <div class=" flex justify-between lg:block items-center ">
     <div class="flex justify-between items-center gap-2 flex-grow p-3 pr-0 lg:pr-5 2xl:p-8 text-white lg:grid lg:grid-cols-3 lg:justify-items-center">
                <img class="w-[90px] lg:w-[200px] xl:w-[250px] lg:order-2" src="https://hockeyshop.dk/wp-content/uploads/2020/07/HockeyShop.svg" alt="">



                <div
                    class="search_bar group">
                    <input type="text" name="search" id="search"
                        class="group-hover:scale-x-100"
                        placeholder="search">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <div class="order-3  text-xl 2xl:text-2xl font-medium flex items-center text-white">
                    <a href="#" class="hidden lg:block">Login</a>
                    <hr class='hidden lg:block h-5 border-[1px] border-solid mx-5 border-gray-500/50'>
                    <a href="#" class="hidden lg:block">Vault</a>
                    <hr class='hidden lg:block h-5 border-[1px] border-solid mx-5 border-gray-500/50'>
                    <a href="#" class="flex gap-2 items-center p-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span class="hidden lg:block ">Cart</span>
                    </a>

                </div>

            </div>

            <button class='hidden text-white flex flex-col justify-center  lg:hidden ' id='close_all_opened'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <button
                class="menu_btn flex flex-col justify-cflex  text-sm  btn text-white rounded-md flex items-center gap-1 font-medium lg:hidden  ">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
     <div class="menu item  overflow-y-scroll lg:overflow-visible overflow-x-hidden  flex flex-col lg:bg-[#1d1d1d] ">
                <div class=' p-3 px-5 flex justify-between lg:hidden'>
                    <button class="flex items-center gap-2 hidden " id='back_btn'>
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
                        <a class="hbdv_megamenu__primary--btn btn" ><?php echo $title; ?></a>
                        
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
            </div>
            </nav>

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


        <div class="example---nesing">
            <!-- NAVIGATION MENU STARTS -->
            <?php echo get_hockeyshop_menu_holder();?>
            <!-- NAVIGATION MENU ENDS -->
        </div>
        <script>
        const btn = document.querySelectorAll('.btn')
        const backBtn = document.querySelector('#back_btn')
        const closeAll = document.querySelector('#close_all_opened')
        const menuBtn = document.querySelector('.menu_btn')
        const changeMenuIcon = (isOpen) => {
            if (window.innerWidth <= 1023) {
                if (isOpen) {
                    closeAll.style.display = 'flex'
                    menuBtn.style.display = 'none'
                } else {
                    closeAll.style.display = 'none'
                    menuBtn.style.display = 'flex'
                }
            }
        }
        btn.forEach(ele => {
            ele.addEventListener('click', () => {
                ele.nextElementSibling.classList.add('opened')
                const opened = document.querySelectorAll('.opened')
                changeMenuIcon(true)
                if (opened.length <= 1 && window.length <= 1023) {
                    backBtn.classList.add('hidden')
                } else {
                    backBtn.classList.remove('hidden')
                }
            })
        })

        backBtn.addEventListener('click', () => {
            const opened = document.querySelectorAll('.opened')
            opened[opened.length - 1].classList.remove('opened')
            if (opened.length <= 1) {
                changeMenuIcon(false)
            }
            if (opened.length <= 2) {
               backBtn.classList.add('hidden')
            }


        })

        closeAll.addEventListener('click', () => {
            const opened = document.querySelectorAll('.opened')
            opened.forEach(ele => ele.classList.remove('opened'))
            changeMenuIcon(false)
        })


       
        window.addEventListener('load', () =>{
            const r = document.querySelector(':root')
        const nav = document.querySelector('nav')
        const menuHeight = window.innerHeight - nav.scrollHeight
            r.style.setProperty('--menu-height', menuHeight + 'px');
            r.style.setProperty('--nav-height', nav.scrollHeight + 'px');
            
        })

    </script>
    </section>
    <!-- HTML END HERE -->
    <?php
}






