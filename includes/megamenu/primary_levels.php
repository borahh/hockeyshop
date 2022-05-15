<?php

//[foobar]
function foobar_func( $atts ){ ?>
	<?php if( have_rows('hbdv_mega_primary_levels', 'option') ): ?>

        <ul>
        
        <?php while( have_rows('hbdv_mega_primary_levels', 'option') ): the_row(); ?>
        
            <li><?php the_sub_field('hbdv_mega_primary_level_title'); ?></li>
        
        <?php endwhile; ?>
        
        </ul>
        
        <?php endif; ?>
        <?php
}
add_shortcode( 'foobar', 'foobar_func' );




