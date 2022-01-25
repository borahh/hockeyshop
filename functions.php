<?php

// Define theme dir path.
if ( ! defined( 'BORAHH_HOCKEYSHOP_DIR' ) ) {
	define( 'BORAHH_HOCKEYSHOP_DIR', get_stylesheet_directory() );
}

// Define includes/calculators path
if ( ! defined( 'BORAHH_HOCKEYSHOP_DIR_CALCULATORS' ) ) {
	define( 'BORAHH_HOCKEYSHOP_DIR_CALCULATORS', get_stylesheet_directory() . '/includes/calculators/' );
}

// Define includes/woocommerce path
if ( ! defined( 'BORAHH_HOCKEYSHOP_DIR_WOO' ) ) {
	define( 'BORAHH_HOCKEYSHOP_DIR_WOO', get_stylesheet_directory() . '/includes/woocommerce/' );
}


// Define theme dir url.
if ( ! defined( 'BORAHH_HOCKEYSHOP_URL' ) ) {
	define( 'BORAHH_HOCKEYSHOP_URL', get_stylesheet_directory_uri() );
}

// Define theme assets url.
if ( ! defined( 'BORAHH_HOCKEYSHOP_CSS_URL' ) ) {
	define( 'BORAHH_HOCKEYSHOP_CSS_URL', get_stylesheet_directory_uri(). '/assets/css/' );
}

// Define theme assets url.
if ( ! defined( 'BORAHH_HOCKEYSHOP_JS_URL' ) ) {
	define( 'BORAHH_HOCKEYSHOP_JS_URL', get_stylesheet_directory_uri(). '/assets/js/build/' );
}


/**
 * Load child theme css and optional scripts
 *
 */
function hockeyshop_enqueue_scripts() {
	wp_enqueue_style(
		'hockeyshop-theme-style',
		BORAHH_HOCKEYSHOP_URL . '/style.css',
		[
			'hello-elementor-theme-style',
		],
		'1.0.0'
	);
    
    wp_enqueue_style(
		'borahh-hockeyshop-style',
		BORAHH_HOCKEYSHOP_URL . '/assets/css/main.css',
		null,
		'1.0.0'
	);

	wp_enqueue_script(
		'borahh',
		BORAHH_HOCKEYSHOP_JS_URL . 'bundle.js',
		array(),
		'1.0.0',
        true
	);
    
}
add_action( 'wp_enqueue_scripts', 'hockeyshop_enqueue_scripts', 999 );

// Include Files
include BORAHH_HOCKEYSHOP_DIR_CALCULATORS . 'index.php';    
include BORAHH_HOCKEYSHOP_DIR_WOO . 'index.php';    





/* Hide page title */ 
function ele_disable_page_title( $return ) {
   return false;
}
add_filter( 'hello_elementor_page_title', 'ele_disable_page_title' );




/* Add new image sizes */ 
add_image_size( 'hovedkategori-oversigt', 265, 150, TRUE );

add_filter( 'image_size_names_choose', 'my_custom_sizes' );
function my_custom_sizes( $sizes ) {
return array_merge( $sizes, array(
'hovedkategori-oversigt' => __( 'Kategori Oversigt Thumb' ),
) );
}



/**
 * Remove the breadcrumbs 
 */
add_action( 'init', 'woo_remove_wc_breadcrumbs' );
function woo_remove_wc_breadcrumbs() {
    remove_action( 'woocommerce_before_main_content', 'woocommerce_breadcrumb', 20, 0 );
}



/**
 * Enque admin styles 
 */

function admin_style() {
  wp_enqueue_style('admin-styles', BORAHH_HOCKEYSHOP_URL.'/admin.css');
}
add_action('admin_enqueue_scripts', 'admin_style');