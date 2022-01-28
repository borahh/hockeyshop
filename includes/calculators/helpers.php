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
        $l[$dep->name]['name'] = $dep->name;
        $l[$dep->name]['list'] = array_map(function($v) { return 'attribute_' . $v; }, $dep->list);
        $l[$dep->name]['value'] = $k;

        
    }
    return $l;
    
 }


/*
 *
 * Get Fields
 * 
 */
function borahh_get_fields($fields) { 
    return array_map(function($field) {
       return get_field( $field );
    }, $fields);
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
    $fields = borahh_get_fields($availableCalculators->$value->fields);

    if(!$calculator) {
        return;
    }

    $instance = new $calculator($deps);

    return $instance->render();


}