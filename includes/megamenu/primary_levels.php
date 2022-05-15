<?php

//[foobar]
function foobar_func( $atts ){ ?>
	<?php if( have_rows('repeater', 'option') ): ?>

        <ul>
        
        <?php while( have_rows('repeater', 'option') ): the_row(); ?>
        
            <li><?php the_sub_field('title'); ?></li>
        
        <?php endwhile; ?>
        
        </ul>
        
        <?php endif; ?>
        <?php
}
add_shortcode( 'foobar', 'foobar_func' );




