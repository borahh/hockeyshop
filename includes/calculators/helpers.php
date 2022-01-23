<?php

/*
 *  Retrieve the value from 'hbdv_load_calculator' 
 */

function borahh_get_calculator() {
    global $post;
	$value = get_field('hbdv_load_calculator', $post->ID);

    if(!$value || $value === '') {
        return;
    }

    $availableCalculators = borahh_calculator_types();
    $calculator = $availableCalculators[$value];

    if(!$calculator) {
        return;
    }

    return new $calculator();


}