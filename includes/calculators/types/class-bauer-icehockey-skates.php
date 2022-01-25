<?php
class BauerIcehockeySkates extends BorahhCalculatorBase {
    public function __construct() {
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
    }
}