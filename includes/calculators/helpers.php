<?php




/*
 *  Return the calculator instance 
 */

function borahh_get_calculator() {
    global $post;

    // Get calculator type from product field 'hbdv_load_calculator'
	$value = get_field('hbdv_load_calculator', $post->ID);

    if(!$value || $value === '') {
        return;
    }

    $availableCalculators = borahh_calculator_types();
    $calculator = $availableCalculators->$value->ID;

    if(!$calculator) {
        return;
    }

    $instance = new $calculator($availableCalculators->$value->dependencies);

    return $instance->render();


}