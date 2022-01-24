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



// Include Files
include BORAHH_HOCKEYSHOP_DIR_CALCULATORS . 'index.php';    
include BORAHH_HOCKEYSHOP_DIR_WOO . 'index.php';    

