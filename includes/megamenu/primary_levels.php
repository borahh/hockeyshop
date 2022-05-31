<?php

function hockeyshop_create_menu_name($level) {
    return strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $level)));
}


function get_hockeyshop_top_link1() {
    /* Changed */
    $link1 = get_field('hbdv_menu_toplink1');
    if( $link1 ) {
        return $link1['url'];
    }
}
function get_hockeyshop_top_link_title1() {
    $link1 = get_field('hbdv_menu_toplink1');
    if( $link1 ) {
        return $link1['title'];
    }
}
function get_hockeyshop_top_link_title2() {
    $link1 = get_field('hbdv_menu_toplink2');
    if( $link1 ) {
        return $link1['title'];
    }
}
function get_hockeyshop_top_link_title3() {
    $link1 = get_field('hbdv_menu_toplink3');
    if( $link1 ) {
        return $link1['title'];
    }
}
function get_hockeyshop_top_link2() {
    $link1 = get_field('hbdv_menu_toplink2');
    if( $link1 ) {
        return $link1['url'];
    }
}
function get_hockeyshop_top_link3() {
    $link1 = get_field('hbdv_menu_toplink3');
    if( $link1 ) {
        return $link1['url'];
    }
}
function get_hockeyshop_menu_holder() {
    ?>  
    <nav class="  w-full bg-[#111111] fixed lg:relative left-0 top-0 z-50 ">
        <div class = 'hidden bg-black lg:block '>
        
              <div class = 'flex w-11/12 max-w-[1500px] mx-auto p-3 gap-10 font-bold font-social-gothic text-white uppercase text-sm'>
                   <a href='<?php echo get_hockeyshop_top_link1(); ?>'><?php echo get_hockeyshop_top_link_title1(); ?></a>
                   <a href='<?php echo get_hockeyshop_top_link2(); ?>'><?php echo get_hockeyshop_top_link_title2(); ?></a>
                   <a href='<?php echo get_hockeyshop_top_link3(); ?>'><?php echo get_hockeyshop_top_link_title3(); ?></a>
              </div>
        </div>
    <div class="flex items-center justify-between lg:block">
     <div class="flex items-center justify-between flex-grow gap-2 p-3 pr-0 text-white lg:pr-5 2xl:py-8 lg:grid lg:grid-cols-3 lg:justify-items-center w-11/12 max-w-[1500px] mx-auto">
                <img class="w-[90px] lg:w-[200px] xl:w-[250px] lg:order-2" src="https://hockeyshop.dk/wp-content/uploads/2020/07/HockeyShop.svg" alt="">

                <div class = 'search_bar group'>
                <div class = 'input_field group-hover:scale-x-100 bg-white lg:bg-[#2f2f2f]'>
                <?php echo do_shortcode('[aws_search_form id="1"]');?>
                </div>
                <svg class = ' fill-current stroke-0'  viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8332 14.17L22 20.3368L20.3368 22L14.17 15.8332C12.686 16.9669 10.8316 17.6404 8.8202 17.6404C3.94862 17.6404 0 13.6914 0 8.8202C0 3.94862 3.94862 0 8.8202 0C13.6914 0 17.6404 3.94862 17.6404 8.8202C17.6404 10.8316 16.9669 12.686 15.8332 14.17ZM8.8202 15.288C12.3924 15.288 15.2881 12.3923 15.2881 8.8201C15.2881 5.2476 12.3924 2.35174 8.8202 2.35174C5.24771 2.35174 2.35184 5.2475 2.35184 8.8201C2.35184 12.3923 5.2476 15.288 8.8202 15.288Z"/>
                </svg>

                </div>
                

                <div class="flex items-center order-3 text-lg font-medium text-white 2xl:text-xl font-social-gothic">
                    <a href="#" class="hidden lg:block">Login</a>
                    <hr class='hidden lg:block h-5 border-[1px] border-solid mx-5 border-gray-500/50'>
                    <a href="#" class="hidden lg:block">Vault</a>
                    <hr class='hidden lg:block h-5 border-[1px] border-solid mx-5 border-gray-500/50'>
                    <a href="#" class="flex items-center gap-2 p-2 text-white">
                    <div class = "relative w-fit ">
                    <svg class = 'h-7 w-7 relative fill-current' viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.6333 4.95989L25.2958 15.2144C25.0463 15.9447 24.3913 16.4315 23.6115 16.4315H10.7297C9.9811 16.4315 9.2637 15.9751 9.01418 15.3057L4.08601 2.4343H1.24764C0.561437 2.4343 0 1.88658 0 1.21715C0 0.547718 0.561437 0 1.24764 0H4.95936C5.4896 0 5.95747 0.334716 6.14461 0.821577L11.2287 13.9972H23.0813L25.7325 5.78147H11.0416C10.3554 5.78147 9.79395 5.23375 9.79395 4.56432C9.79395 3.89488 10.3554 3.34716 11.0416 3.34716H27.448C27.8535 3.34716 28.2278 3.56017 28.4461 3.86445C28.6957 4.16874 28.758 4.59474 28.6333 4.95989ZM11.3535 18.0443C10.8233 18.0443 10.293 18.2573 9.91871 18.6224C9.54442 18.9875 9.32609 19.5048 9.32609 20.0221C9.32609 20.5394 9.54442 21.0567 9.91871 21.4219C10.293 21.787 10.8233 22 11.3535 22C11.8837 22 12.414 21.787 12.7883 21.4219C13.1626 21.0567 13.3809 20.5394 13.3809 20.0221C13.3809 19.5048 13.1626 18.9875 12.7883 18.6224C12.414 18.2573 11.8837 18.0443 11.3535 18.0443ZM22.551 18.0443C22.0208 18.0443 21.4905 18.2573 21.1163 18.6224C20.742 18.9875 20.5236 19.5048 20.5236 20.0221C20.5236 20.5394 20.742 21.0567 21.1163 21.4219C21.4905 21.787 22.0208 22 22.551 22C23.0813 22 23.6115 21.787 23.9858 21.4219C24.3601 21.0567 24.5785 20.5394 24.5785 20.0221C24.5785 19.5048 24.3601 18.9875 23.9858 18.6224C23.6115 18.2573 23.0813 18.0443 22.551 18.0443Z" />
                    </svg>
                    <!-- <span class = 'bg-[#ff0000] text-white aspect-square rounded-full absolute h-[19px] w-fit -top-[10px] -right-[5px] text-[10px] flex items-center justify-center'>0</span> -->
                    </div>

                        <span class="hidden lg:block ">Cart</span>
                    </a>

                </div>

            </div>

            <button class='flex flex-col justify-center hidden text-white lg:hidden ' id='close_all_opened'>
                <svg class = 'w-6 h-6' viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.22382 0.492232C1.78414 -0.068085 2.83636 0.0756771 3.57401 0.813334L24.9443 22.1837C25.682 22.9213 25.8258 23.9735 25.2655 24.5339C24.7051 25.0942 23.6529 24.9504 22.9153 24.2128L1.54492 2.84242C0.807267 2.10477 0.663505 1.05255 1.22382 0.492232Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.2652 0.492238C24.7049 -0.0680793 23.6527 0.0756828 22.915 0.81334L1.54466 22.1837C0.807001 22.9213 0.663238 23.9736 1.22356 24.5339C1.78387 25.0942 2.83609 24.9504 3.57375 24.2128L24.9441 2.84243C25.6817 2.10477 25.8255 1.05256 25.2652 0.492238Z" fill="white"/>
                </svg>
            </button>
            <button
                class="flex flex-col items-center gap-1 text-sm font-medium text-white rounded-md menu_btn justify-cflex btn lg:hidden ">
                <svg class = 'w-6 h-6' viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.43478C0 0.642374 0.671573 0 1.5 0H25.5C26.3284 0 27 0.642374 27 1.43478C27 2.22719 26.3284 2.86957 25.5 2.86957H1.5C0.671573 2.86957 0 2.22719 0 1.43478ZM0 11C0 10.2076 0.671573 9.56522 1.5 9.56522H25.5C26.3284 9.56522 27 10.2076 27 11C27 11.7924 26.3284 12.4348 25.5 12.4348H1.5C0.671573 12.4348 0 11.7924 0 11ZM0 20.5652C0 19.7728 0.671573 19.1304 1.5 19.1304H25.5C26.3284 19.1304 27 19.7728 27 20.5652C27 21.3576 26.3284 22 25.5 22H1.5C0.671573 22 0 21.3576 0 20.5652Z" fill="white"/>
                </svg>
            </button>
     <div class="menu item  overflow-y-scroll lg:overflow-visible overflow-x-hidden  flex flex-col lg:bg-[#1d1d1d] ">
                <div class='flex justify-between p-3 px-5 lg:hidden'>
                    <button class="flex items-center hidden gap-2 " id='back_btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Back
                    </button>
                </div>
               <div class="relative flex-grow p-5 hbdv_megamenu lg:static lg:flex lg:p-0 lg:justify-center lg:items-center lg:w-full">
                <?php
                if( have_rows('hbdv_mega_primary_levels', 'option') ):  
                    while( have_rows('hbdv_mega_primary_levels', 'option') ): the_row();
                    $url=get_sub_field('hbdv_mega_primary_level_url');
                    $title=get_sub_field('hbdv_mega_primary_level_title');
                    $id='MegaMenu --- '. get_sub_field('hbdv_mega_primary_level_id');
                    $name=hockeyshop_create_menu_name($id);
                    ?>
                    <div class="hbdv_megamenu__primary drop_down">
                        <a href="<?php echo $url; ?>" class="hbdv_megamenu__primary--btn btn" ><?php echo $title; ?></a>
                        
                    <?php    
                        wp_nav_menu( array(
                            'theme_location' => $name,
                            'container_class' => 'hbdv_megamenu__secondary item',
                            'menu_class' => 'hbdv_submenu_col'
                        ) );
                        ?>
                        </div>
                        <?php
                    endwhile;
                endif;
                ?>
                 <div class="absolute bottom-0 left-0 grid w-full grid-cols-2 p-4 font-bold bg-gradient-to-t from-white via-white to-transparent lg:hidden font-social-gothic ">
                         <a href="#" class = 'flex flex-col items-center'>
                             <img src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'currency.png'; ?>" alt="icon" class='w-10 mb-2'>
                              Vault
                         </a>
                         <a href="#" class = 'flex flex-col items-center'>
                              <img src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'user.png'; ?>" alt="icon" class='w-10 mb-2'>
                              My Account
                         </a>
                    </div>
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
            ele.addEventListener('click', (e) => {
                e.preventDefault();
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






