<?php


function hbdv_sharpening_options() {
	
	// Default Option
	$default = '<option value="no" selected>Ingen slibning</option>';
	
	// Range
	$range = [ 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ];
	
	$options = $default;
	
	foreach ($range as $value) {
	
	  $name = $value;
	  if( $value == 20 ) {
		  $name = $value . ' - Standard';
	  }
	  $options .= '<option value="' . $value . '">' . $name . '</option>';
	}
	
	return $options;
}


// -----------------------------------------
// 1. Show custom input field above Add to Cart

 
add_action( 'woocommerce_single_variation', function() {
	
	global $post;

 
    $sharpening = get_field('hbdv_sharpening_options', $post->ID);

    if ( $sharpening == true ) {
	
    $value = isset( $_POST['product_sharpening'] ) ? sanitize_text_field( $_POST['product_sharpening'] ) : '';
    echo '<div class="hbdv_addon_sharpening"><label for="product_sharpening" style="font-weight: bold;">Tilvælg slibning</label> 
		<p>
			<select id="product_sharpening" name="product_sharpening" style="margin: 5px 0px 5px 0px;">'
			   .  hbdv_sharpening_options() .
			'</select>
		</p>
	</div>';
		
	}
}, 9 );



// -----------------------------------------
// 2. Save custom input field value into cart item data
 
add_filter( 'woocommerce_add_cart_item_data', function( $cart_item, $product_id ) {
    if( isset( $_POST['product_sharpening'] ) ) {
        $cart_item['product_sharpening'] = sanitize_text_field( $_POST['product_sharpening'] );
    }
    return $cart_item;
}, 10, 2 );
 

// -----------------------------------------
// 3. Display custom input field value @ Cart
 
add_filter( 'woocommerce_get_item_data', function( $data, $cart_item ) {
    if ( isset( $cart_item['product_sharpening'] ) ){
        $data[] = array(
            'name' => 'Sharpening',
            'value' => sanitize_text_field( $cart_item['product_sharpening'] )
        );
    }
    return $data;
}, 10, 2 );
 

// -----------------------------------------
// 4. Save custom input field value into order item meta
 
add_action( 'woocommerce_add_order_item_meta', function( $item_id, $values ) {
    if ( ! empty( $values['product_sharpening'] ) ) {
        wc_add_order_item_meta( $item_id, 'Sharpening', $values['product_sharpening'], true );
    }
}, 10, 2 );


// -----------------------------------------
// 5. Display custom input field value into order table
 
add_filter( 'woocommerce_order_item_product', function( $cart_item, $order_item ){
    if( isset( $order_item['product_sharpening'] ) ){
        $cart_item['product_sharpening'] = $order_item['product_sharpening'];
    }
    return $cart_item;
}, 10, 2 );
 
 
// -----------------------------------------
// 6. Display custom input field value into order emails
 
add_filter( 'woocommerce_email_order_meta_fields', function( $fields ) { 
    $fields['product_sharpening'] = 'Sharpening';
    return $fields; 
});
 
