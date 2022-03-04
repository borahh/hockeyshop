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
        'ccm_gloves_sr' => (object) array(
            'ID' => 'CCMGloves',
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
        'ccm_gloves_jr' => (object) array(
            'ID' => 'CCMGloves',
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
        'ccm_gloves_yt' => (object) array(
            'ID' => 'CCMGloves',
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
        'ccm_shoulder_pads_jr' => (object) array(
            'ID' => 'CCMShoulderPads',
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
            'ID' => 'CCMShoulderPads',
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
            'ID' => 'CCMShoulderPads',
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
            'ID' => 'CCMShoulderPads',
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
        'ccm_elbow_pads_sr' => (object) array(
            'ID' => 'CCMElbowPads',
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
        'ccm_elbow_pads_jr' => (object) array(
            'ID' => 'CCMElbowPads',
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
        'ccm_elbow_pads_yt' => (object) array(
            'ID' => 'CCMElbowPads',
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
        'ccm_shin_guards_sr' => (object) array(
            'ID' => 'CCMShinGuards',
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
        'ccm_shin_guards_jr' => (object) array(
            'ID' => 'CCMShinGuards',
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
        'ccm_shin_guards_yt' => (object) array(
            'ID' => 'CCMShinGuards',
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
        'ccm_player_pants_sr' => (object) array(
            'ID' => 'CCMPlayerPants',
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
        'ccm_player_pants_jr' => (object) array(
            'ID' => 'CCMPlayerPants',
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
        'ccm_player_pants_yt' => (object) array(
            'ID' => 'CCMPlayerPants',
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
        'ccm_player_pants_sr' => (object) array(
            'ID' => 'CCMPlayerPants',
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

