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
            'type' => null,
            'fields' => array(
                'lengthFrom' => 'hbdv_size_from',
                'lengthTo' =>  'hbdv_size_to',
                'scale'  => 'hbdv_choose_fit_scale'
            ),
            'dependencies' => [
                (object) array(
                    'name' => 'length',
                    'list' =>  array('pa_skoejte-stoerrelse-yth', 'pa_skoejte-stoerrelse-jr', 'pa_skoejte-stoerrelse-sr', 'pa_skoejter-stoerrelse-int'),
                    'get'  => 'name',
                    'selector' => 'data-title'
               ),
                (object) array(
                    'name' => 'width',
                    'list' =>  array('pa_skoejte-bredde'),
                    'get'  => 'slug',
                    'selector' => 'data-value'
               )
            ]
        ),
        'ccm_skates' => (object) array(
            'ID' => 'CCMSkates',
            'type' => null,
            'fields' => array(
                'lengthFrom' => 'hbdv_size_from',
                'lengthTo' =>  'hbdv_size_to',
                'scale'  => 'hbdv_choose_fit_scale'
            ),
            'dependencies' => [
                (object) array(
                    'name' => 'length',
                    'list' =>  array('pa_skoejte-stoerrelse-yth', 'pa_skoejte-stoerrelse-jr', 'pa_skoejte-stoerrelse-sr', 'pa_skoejter-stoerrelse-int'),
                    'get'  => 'name',
                    'selector' => 'data-title'
               ),
                (object) array(
                    'name' => 'width',
                    'list' =>  array('pa_skoejte-bredde'),
                    'get'  => 'name',
                    'selector' => 'data-title'
               )
            ]
        ),
        'ccm_shoulder_pads_jr' => (object) array(
            'ID' => 'ShoulderPads',
            'type' => 'JR',
            'fields' => null,
            'dependencies' => [
                (object) array(
                    'name' => 'size',
                    'list' =>  array('pa_x-stoerrelser'),
                    'get'  => 'name',
                    'selector' => 'data-title'
               )
            ]
        ),
        'ccm_shoulder_pads_sr' => (object) array(
            'ID' => 'ShoulderPads',
            'type' => 'SR',
            'fields' => null,
            'dependencies' => [
                (object) array(
                    'name' => 'size',
                    'list' =>  array('pa_x-stoerrelser'),
                    'get'  => 'name',
                    'selector' => 'data-title'
               )
            ]
        ),
        'ccm_shoulder_pads_yt' => (object) array(
            'ID' => 'ShoulderPads',
            'type' => 'YT',
            'fields' => null,
            'dependencies' => [
                (object) array(
                    'name' => 'size',
                    'list' =>  array('pa_x-stoerrelser'),
                    'get'  => 'name',
                    'selector' => 'data-title'
               )
            ]
        ),
        'ccm_shoulder_pads_women' => (object) array(
            'ID' => 'ShoulderPads',
            'type' => 'WOMEN',
            'fields' => null,
            'dependencies' => [
                (object) array(
                    'name' => 'size',
                    'list' =>  array('pa_x-stoerrelser'),
                    'get'  => 'name',
                    'selector' => 'data-title'
               )
            ]
        ),
    );
}

