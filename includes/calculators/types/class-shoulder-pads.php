<?php
class ShoulderPads extends BorahhCalculatorBase {

    public function __construct($calculatorID, $dependencies, $fields, $type) {
        $this->calculatorID = $calculatorID . $type;
        $this->dependencies = $dependencies;
        $this->fields = $fields;
        $this->type = $type;
    }

    // Loaders
    protected function loaders() {
        ob_start();
        ?>
            <span id="AvailableVariationsLoader" data-variations='<?php echo json_encode($this->dependencies); ?>'></span>
        <?php
        return ob_get_clean();
    }

    protected function accordionResult() {
        ob_start();
        ?>
            <span x-text="dataObtained.size"></span>
        <?php
        return ob_get_clean();
    }

    public function onMatchedVariations() {
        ob_start();
        ?>
            <h2>Din anbefalede størrelse er</h2>
            <div class="calculator__wraper__content__end__matched__result"> <span x-text="dataObtained.fit"></span>/ <span x-text="dataObtained.scale"></span></div>
            <div>
                <img src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'final-fit1.webp'; ?>" x-show="dataObtained.scale === 'fit1'">
                <img src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'final-fit2.webp'; ?>" x-show="dataObtained.scale === 'fit2'">
                <img src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'final-fit3.webp'; ?>" x-show="dataObtained.scale === 'fit3'">
            </div>
        <?php
        return ob_get_clean();
    }

   
    protected function heightOptions() {
        ob_start();

        // Fix from here
        ?>
        <div class="calculator__wraper__content__form__tab--length__switcher">
            <span>CM</span>
            
            <div class="calculator__wraper__content__form__tab--length__switcher__inner">
                <template x-for="unit in units" :key="unit.id">
                    <div class="calculator__wraper__content__form__tab--length__switcher__inner__input">
                        <input class="peer" x-model="selectedUnit" type="radio" :id="unit.id" :value="unit.id" :checked="$el.value === selectedUnit"/>
                        <label :for="unit.id" class="peer-checked:bg-accent peer-checked:text-white">
                        </label>
                    </div>
                </template>
            </div>
            <span>INCH</span>
        </div>
        
        <h2>
            <?php _e("Højde", "hockeyshop-theme"); ?>
        </h2>
        <div class="calculator__wraper__content__form__tab--length__input">
            <input type="text" :value="getHeightValue" >            
            <span x-text="selectedUnit"></span>
        </div>
        
        <input type="range" class="calculator-range sm:w-5/6" x-bind:min="rangeFrom.height" step="1" x-bind:max="rangeTo.height" x-model="input.height">

        <?php
        return ob_get_clean();
    }

    protected function chestOptions() {
        ob_start();

        // Fix from here
        ?>
        
        <img src="<?php echo BORAHH_HOCKEYSHOP_IMG_URL . 'chest.svg'; ?>">     

        <h2>
            <?php _e("Brystomkreds", "hockeyshop-theme"); ?>
        </h2>
        <div class="calculator__wraper__content__form__tab--length__input">
            <input type="text" :value="getChestValue" >            
            <span x-text="selectedUnit"></span>
        </div>
        
        <input type="range" class="calculator-range sm:w-5/6" x-bind:min="rangeFrom.chest" step="1" x-bind:max="rangeTo.chest" x-model="input.chest">
        
        
        <?php
        return ob_get_clean();
    }

   
     // Steps 
     protected function steps() {
        ob_start();
        ?>
            <div class="calculator__wraper__content__form__tab calculator__wraper__content__form__tab--length calculator__wraper__content__form__tab--length-multi" x-show="currentStep === 0">
                <?php echo $this->heightOptions(); ?>
            </div>
            <div class="calculator__wraper__content__form__tab calculator__wraper__content__form__tab--length calculator__wraper__content__form__tab--length-multi" x-show="currentStep === 1">
                <?php echo $this->chestOptions(); ?>
            </div>
            
        <?php
        return ob_get_clean();
    }
}