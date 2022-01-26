<?php 

/*
 *
 *  Set the available calculators
 * 
 */

function borahh_calculator_types() {
    return (object) array(
        'bauer_icehockey_skates' => (object) array(
            'ID' => 'BauerIcehockeySkates',
            'dependencies' => [
                (object) array(
                    'name' => 'length',
                    'list' =>  array('pa_skoejte-stoerrelse-yth', 'pa_skoejte-stoerrelse-jr', 'pa_skoejte-stoerrelse-sr', 'pa_skoejter-stoerrelse-int'),
                    'get'  => 'name'
               ),
                (object) array(
                    'name' => 'width',
                    'list' =>  array('pa_skoejte-bredde'),
                    'get'  => 'slug'
               )
            ]
        ),
    );
}

