<?php

function get_hockeyshop_all_primary_levels() {
    $levels = array_filter(get_nav_menu_locations(), function($key) {
        return strpos($key, 'megamenu---') === 0;
    }, ARRAY_FILTER_USE_KEY);
    
    return $levels;
}


?>