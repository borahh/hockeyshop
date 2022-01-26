<?php
class BauerIcehockeySkates extends BorahhCalculatorBase {
    public function __construct($dependencies) {
        $this->dependencies = $dependencies;
    }

     // Steps 
     protected function steps() {
        ob_start();
        ?>
            <div class="calculator__wraper__content__form__tab" x-show="currentStep === 0">Extend this method to include steps 1</div>
            <div class="calculator__wraper__content__form__tab" x-show="currentStep === 1">
                <h1>
                    <?php _e("Vælg dit fit", "hockeyshop-theme"); ?>
                </h1>
            </div>
            <div class="calculator__wraper__content__form__tab" x-show="currentStep === 2">
                <h1>
                    <?php _e("Vælg din fodbredde", "hockeyshop-theme"); ?>
                </h1>
            </div>
            <div class="calculator__wraper__content__form__tab" x-show="currentStep === 3">
                <h1>
                    <?php _e("Væld din fodhøjde", "hockeyshop-theme"); ?>
                </h1>
            </div>
        <?php
        return ob_get_clean();
    }
}