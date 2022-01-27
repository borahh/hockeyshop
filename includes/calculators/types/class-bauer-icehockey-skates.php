<?php
class BauerIcehockeySkates extends BorahhCalculatorBase {
    public function __construct($dependencies) {
        $this->dependencies = $dependencies;
    }

    protected function widthOptions($options) {
        ob_start();

        $labels = ['Small', 'Mellem', 'Bred'];
        foreach($options as $index=>$option) {
        ?>
        <div class="calculator__wraper__content__form__tab--width__option">
            <input class="peer" type="radio" name="foot-width" id="<?php echo 'width_' . $option; ?>" value="<?php echo $index; ?>"/>
            <img src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'grid-floor.webp'; ?>" alt=""/>
            <img class="calculator__wraper__content__form__tab--width__option__img_inactive" src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'foot-width-' . $option . '-inactive.webp'; ?>" alt="" />
            <img class="opacity-0 calculator__wraper__content__form__tab--width__option__img_active peer-checked:opacity-100" src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'foot-width-' . $option . '-active.webp'; ?>" alt="" />
            <label for="<?php echo 'width_' . $option; ?>" class="calculator__wraper__content__form__tab--width__option__input peer-checked:bg-accent peer-checked:text-white"> 
                <?php _e($labels[$index], "hockeyshop-theme"); ?>
            </label>
        </div>
        
        <?php
        }
        return ob_get_clean();
    }

    protected function heightOptions($options) {
        ob_start();

        $labels = ['Lav', 'Mellem', 'Høj'];
        foreach($options as $index=>$option) {
        ?>
        <div class="calculator__wraper__content__form__tab--height__option">
            <input class="peer" type="radio" name="foot-height" id="<?php echo 'height_' . $option; ?>" value="<?php echo $index; ?>"/>
            <img src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'grid-floor.webp'; ?>" alt=""/>
            <img class="calculator__wraper__content__form__tab--height__option__img_inactive" src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'foot-height-' . $option . '-inactive.webp'; ?>" alt="" />
            <img class="opacity-0 calculator__wraper__content__form__tab--height__option__img_active peer-checked:opacity-100" src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'foot-height-' . $option . '-active.webp'; ?>" alt="" />
            <label for="<?php echo 'height_' . $option; ?>" class="calculator__wraper__content__form__tab--height__option__input peer-checked:bg-accent peer-checked:text-white"> 
                <?php _e($labels[$index], "hockeyshop-theme"); ?>
            </label>
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
                <div class="relative grid grid-cols-3 calculator__wraper__content__form__tab--width__inner">
                    <img class="absolute top-[70px]" src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'grid-floor.webp'; ?>" alt=""/>

                    <div class="absolute top-0 grid w-full grid-cols-3">
                        <?php echo $this->widthOptions(array('narrow', 'medium', 'wide')); ?>
                    </div>
                </div>
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