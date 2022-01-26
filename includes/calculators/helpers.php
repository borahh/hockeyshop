<?php

/*
 *
 * Resolve Dependencies
 * 
 */
function borahh_resolve_deps($id, $deps) {
    
    foreach ($deps as $dep) { 
        $k = '';
        foreach ($dep->list as $attrName) {      
            $i = wp_get_post_terms( $id, $attrName);
            $j = array_column($i, $dep->get);
            $k .= implode(',', $j);
        }
        $l[$dep->name] = $k;
        
    }
    return $l;
    
 }


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
    $deps = borahh_resolve_deps($post->ID, $availableCalculators->$value->dependencies);

    if(!$calculator) {
        return;
    }

    $instance = new $calculator($deps);

    return $instance->render();


}