<?php

class BorahhCalculatorBase {
    public function __construct() {
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
    }

    // Scripts 
    public function enqueue_scripts() {
        wp_register_script(
            'borahh-calculator-ui',
            BORAHH_HOCKEYSHOP_JS_URL . 'calculators/ui/main.js',
            array(),
            '1.0.0',
            true
        );
        wp_enqueue_script('borahh-calculator-ui');
    }
    
    // Loaders
    protected function loaders() {}

    // Steps 
    protected function steps() {}

    // Matched Variations
    protected function onMatchedVariations() {
    }
    
    // Unmatched Variations
    protected function onUnmatchedVariations() {
        return 'Here';
    }

    // Render
    public function render() {
        ob_start();
        ?>
        
        <!-- Calculator Wraper -->
        <div class="calculator">

        
            <!-- Calculator Accordion  -->
            <div class="calculator__accordion">
                <!-- Calculator Accordion Info -->
                <span class="calculator__accordion__info">
                    <img
                        class="calculator__accordion__info__icon"
                        src="https://cdn-icons-png.flaticon.com/512/2738/2738840.png"
                        alt
                    />
                    <span class="calculator__accordion__info__label">
                        <?php _e("I tvivl om din størrelse?", "hockeyshop-theme"); ?>
                        <u>
                            <?php _e('Prøv størrelsesguiden', "hockeyshop-theme"); ?>
                        </u>
                    </span>
                </span>

                <!-- Calculator Result -->
                <span class="calculator__accordion__result"></span>

                <!-- Calculator Toggle -->
                <span class="calculator__accordion__toggle">
                    <span></span>
                </span>
            </div>

            <!-- Calculator Wraper -->
            <div class="calculator__wraper">
                <div class="calculator__wraper__content">
                    <!-- Calculator Form -->
                    <form class="calculator__wraper__content__form"></form>

                    <!-- Calculator Nav -->
                    <div class="calculator__wraper__content__nav">
                        <!-- Previous Step -->
                        <a id="prev" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
                                ></path>
                            </svg>
                            <span>
                                <?php _e("Tilbage", "hockeyshop-theme"); ?>
                            </span>
                        </a>
                        
                        <!-- Step Count -->
                        <div class="calculator__wraper__content__nav__step">
                            <span>2</span>
                            <span>/</span>
                            <span>4</span>
                        </div>
                        
                        <!-- Next Step -->
                        <a id="next" href="#">
                            <span>
                                <?php _e("Næste", "hockeyshop-theme"); ?>                             
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
                            </svg>
                        </a>
                    </div>

                    <!-- Calculator End Tab -->
                    <div class="calculator__wraper__content__end">
                        <?php $this->onUnmatchedVariations() ;?>
                    </div>
                </div>
            </div>
            
        </div>

        <?php
        return ob_get_clean();
    }
}

