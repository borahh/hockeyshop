<?php
class BauerIcehockeySkates extends BorahhCalculatorBase {
    public function __construct($dependencies) {
        $this->dependencies = $dependencies;
    }

     // Steps 
     protected function steps() {
        ob_start();
        ?>
            <div class="calculator__wraper__content__form__tab calculator__wraper__content__form__tab--length" x-show="currentStep === 0">Extend this method to include steps 1</div>
            <div class="calculator__wraper__content__form__tab calculator__wraper__content__form__tab--fit" x-show="currentStep === 1">
                <h2>
                    <?php _e("Vælg dit fit", "hockeyshop-theme"); ?>
                </h2>
            </div>
            <div class="calculator__wraper__content__form__tab calculator__wraper__content__form__tab--width" x-show="currentStep === 2">
                <h2>
                    <?php _e("Vælg din fodbredde", "hockeyshop-theme"); ?>
                </h2>
            </div>
            <div class="calculator__wraper__content__form__tab calculator__wraper__content__form__tab--height" x-show="currentStep === 3">
                <h2>
                    <?php _e("Væld din fodhøjde", "hockeyshop-theme"); ?>
                </h2>
            </div>
        <?php
        return ob_get_clean();
    }
}