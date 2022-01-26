<?php
class BauerIcehockeySkates extends BorahhCalculatorBase {
    public function __construct($dependencies) {
        $this->dependencies = $dependencies;
    }

    protected function heightOptions($options) {
        ob_start();

        $labels = ['Lav', 'Mellem', 'Høj']
        foreach($options as $index=>$option) {
        ?>
        <div class="calculator__wraper__content__form__tab--height__option">
            <img src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'grid-floor.webp'; ?>" alt=""/>
            <img class="calculator__wraper__content__form__tab--height__option__img_active" src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'foot-height-' . $option . '-inactive.webp'; ?>" alt="" />
            <img class="calculator__wraper__content__form__tab--height__option__img_inactive" src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'foot-height-' . $option . '-active.webp'; ?>" alt="" />
            <div class="calculator__wraper__content__form__tab--height__option__input"> 
                <input class="peer" type="radio" name="foot-height" id="<?php echo 'height_' . $option; ?>" value="<?php echo $index; ?>"/>
                <label for="<?php echo 'height_' . $option; ?>"> 
                    <?php _e($labels[$index], "hockeyshop-theme"); ?>
                </label>
            </div>
        </div>
        
        <?php
        }
        return ob_get_clean();
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
                <?php echo $this->heightOptions(array('low', 'medium', 'high')); ?>
                

            </div>
        <?php
        return ob_get_clean();
    }
}