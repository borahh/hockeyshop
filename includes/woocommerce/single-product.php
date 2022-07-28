<?php

/** 
  * 
  * This file contains functions that override the single product template.
  * It does not replace the entire single product page 
  *
  **/

  
/** Hide Categories, SKU and Tags from Single page **/
remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );
  

/**
 * 
 * Wrap the product content summary
 * 
 */
add_action( 'woocommerce_single_product_summary', function() {
	echo '<div class="product_content__wrap product_content--hidden">';
});




/** Include Content **/
add_action( 'woocommerce_before_add_to_cart_form', function () {
    echo the_content();

    // Closing Wrapper defined in "woocommerce_single_product_summary" above
	echo '</div>';

    // Read More
    echo '<div class="product_content__reveal--more">Læs mere</div>';
    echo '<div class="hidden product_content__reveal--less">Læs mindre</div>';

	// Get the Calculator Instance
    $calculator = borahh_get_calculator();

    
    if (!$calculator) {
        return;
    } else {    
        echo $calculator;
    }
});