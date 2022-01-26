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
                <div class="calculator__wraper__content__form__tab--height__option">
                    <img src="https://hockeyshop.dk/wp-content/themes/hockeyshop-theme/assets/images/grid-floor.png" alt=""/>
                    <img class="calculator__wraper__content__form__tab--height__option__img_active" src="https://hockeyshop.dk/wp-content/themes/hockeyshop-theme/assets/images/foot-height-low-inactive.png" alt="" />
                    <img class="calculator__wraper__content__form__tab--height__option__img_active" src="https://hockeyshop.dk/wp-content/themes/hockeyshop-theme/assets/images/foot-height-low-active.png" alt="" />
                    <div class="calculator__wraper__content__form__tab--height__option__input"> 
                        <input class="peer" type="radio" name="foot-height" id="low-height-feet" value="0" data-id="low" checked="" />
                        <label for="low-height-feet" class="bg-white peer-checked:bg-blue-400 peer-checked:text-white" > 
                            Lav 
                        </label>
                    </div>
                </div>

            </div>
        <?php
        return ob_get_clean();
    }
}