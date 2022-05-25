<?php

function get_hockeyshop_all_primary_levels() {
    function megamenu($array) {
      if(str_starts_with($array=>$name, 'megamenu---'))
        return true;
      else 
        return false; 
      }
    $levels = array_filter(get_nav_menu_locations(), "Even");
    return $levels;
}


?>