<?php
class CCMSkates extends BorahhCalculatorBase {
    private $inputMax;

    public function __construct($calculatorID, $dependencies, $fields) {
        $this->calculatorID = $calculatorID;
        $this->dependencies = $dependencies;
        $this->fields = $fields;

        // Calculate Max Input 
        $this->inputMax = $this->fields['lengthTo'] - $this->fields['lengthFrom'] - 1;

    }

    

    // Loaders
    protected function loaders() {
        ob_start();
        ?>
            <span id="AvailableVariationsLoader" data-variations='<?php echo json_encode($this->dependencies); ?>'></span>
            <span id="CalculatorDataLoader" data-calculator='<?php echo json_encode($this->fields); ?>'></span>
        <?php
        return ob_get_clean();
    }

    protected function accordionResult() {
        ob_start();
        ?>
            <span x-text="dataObtained.fit"></span>
            <span x-text="dataObtained.scale"></span>
        <?php
        return ob_get_clean();
    }

    public function onMatchedVariations() {
        ob_start();
        ?>
            <h2>Din anbefalede størrelse er</h2>
            <div class="calculator__wraper__content__end__matched__result"> <span x-text="dataObtained.fit"></span>/ <span x-text="dataObtained.scale"></span></div>
            <div>
                <img src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'final-fit1.webp'; ?>" x-show="dataObtained.scale === 'Tapered'">
                <img src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'final-fit2.webp'; ?>" x-show="dataObtained.scale === 'Regular'">
                <img src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'final-fit3.webp'; ?>" x-show="dataObtained.scale === 'Wide'">
            </div>
        <?php
        return ob_get_clean();
    }

    protected function fitSVGs($option) {
        if($option === 'comfort-fit') {
            ob_start(); ?>
               <object type="image/svg+xml" data="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . $option . '.svg'; ?>"></object>

            <?php
            return ob_get_clean();
        } elseif($option === 'pro-fit') {
            ob_start(); ?>
               <object type="image/svg+xml" data="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . $option . '.svg'; ?>"></object>
                
            <?php
            return ob_get_clean();
        
        } elseif($option === 'performance-fit') {
            ob_start(); ?>
               <object type="image/svg+xml" data="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . $option . '.svg'; ?>"></object>
            <?php
            return ob_get_clean();
        }
    }

    protected function lengthOptions() {
        ob_start();

        // Fix from here
        ?>
        <div class="calculator__wraper__content__form__tab--length__switcher">
            <span>EU</span>
            
            <div class="calculator__wraper__content__form__tab--length__switcher__inner">
                <template x-for="unit in units" :key="unit.id">
                    <div class="calculator__wraper__content__form__tab--length__switcher__inner__input">
                        <input class="peer" x-model="selectedUnit" type="radio" :id="unit.id" :value="unit.id" :checked="$el.value === selectedUnit"/>
                        <label :for="unit.id" class="peer-checked:bg-accent peer-checked:text-white">
                        </label>
                    </div>
                </template>
            </div>
            <span>US</span>
        </div>
        <h2>
            <?php _e("Vælg din skostørrelse", "hockeyshop-theme"); ?>
        </h2>
        <div class="calculator__wraper__content__form__tab--length__input">
            <span x-text="selectedUnit"></span>
            <input type="text" :value="getLengthValue(<?php echo $this->fields['lengthFrom']; ?>)" >
            <input type="hidden" :value="getBauerValue(<?php echo $this->fields['lengthFrom']; ?>)" name="__length">
            
        </div>
        <input type="range" class="calculator-range sm:w-5/6" min="0" step="1" max="<?php echo $this->inputMax; ?>" x-model="lengthInput" x-ref="lengthRef">
        
        <img src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'grid-floor.webp'; ?>" alt=""/>

        <?php
        return ob_get_clean();
    }

    protected function fitOptions($options) {
        ob_start();
        $ids = ['pro-fit', 'performance-fit', 'comfort-fit'];
        $infos =['Tæt pasform omkring hele foden', 'Komfortabel pasform, med plads i skøjtens Toe Cap', 'Plads til voksende fødder, eller for en mere løstsiddende pasform'];
        
        foreach($options as $index=>$option) {
        ?>      
        <div class="calculator__wraper__content__form__tab--fit__option">
            <input class="peer" id="<?php echo $ids[$index]; ?>" type="radio" name="__fit" value="<?php echo $index; ?>" <?php if ($index === 0) echo "checked" ;?>/>
            <label for="<?php echo $ids[$index]; ?>" class="bg-gray-200 peer-checked:bg-accent peer-checked:text-white">
                <?php echo $this->fitSVGs($ids[$index]); ?>
                <div><?php _e($option, "hockeyshop-theme"); ?></div>
            </label>
            <p><?php _e($infos[$index], "hockeyshop-theme"); ?></p>
        </div>

        
        <?php
        }
        return ob_get_clean();

    }

    protected function widthOptions($options) {
        ob_start();

        $labels = ['Small', 'Mellem', 'Bred'];
        foreach($options as $index=>$option) {
        ?>
        <div>
            <input class="peer" type="radio" name="__width" id="<?php echo 'width_' . $option; ?>" value="<?php echo $index; ?>" <?php if ($index === 0) echo "checked" ;?>/>        
            <img class="peer-checked:opacity-0 " src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'foot-width-' . $option . '-inactive.webp'; ?>" alt="" />
            <img class="opacity-0 peer-checked:opacity-100" src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'foot-width-' . $option . '-active.webp'; ?>" alt="" />
            <label for="<?php echo 'width_' . $option; ?>" class="peer-checked:bg-accent peer-checked:text-white"> 
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
            <input class="peer" type="radio" name="__height" id="<?php echo 'height_' . $option; ?>" value="<?php echo $index; ?>" <?php if ($index === 0) echo "checked" ;?> />
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
            <input type="hidden" value="<?php echo $this->fields['scale']; ?>" name="__scale">
            <div class="calculator__wraper__content__form__tab calculator__wraper__content__form__tab--length" x-show="currentStep === 0">
                <?php echo $this->lengthOptions(); ?>
            </div>
            <div class="calculator__wraper__content__form__tab calculator__wraper__content__form__tab--fit" x-show="currentStep === 1">
                <h2>
                    <?php _e("Vælg dit fit", "hockeyshop-theme"); ?>
                </h2>
                <?php echo $this->fitOptions(array('Pro fit', 'Performance fit', 'Comfort fit')); ?>
            </div>
            <div class="calculator__wraper__content__form__tab calculator__wraper__content__form__tab--width" x-show="currentStep === 2">
                <h2>
                    <?php _e("Vælg din fodbredde", "hockeyshop-theme"); ?>
                </h2>
                <div class="calculator__wraper__content__form__tab--width__inner">
                    <img class="calculator__wraper__content__form__tab--width__inner__img" src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'grid-floor.webp'; ?>" alt=""/>

                    <div class="calculator__wraper__content__form__tab--width__inner__options">
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