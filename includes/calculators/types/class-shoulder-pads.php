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

   
    protected function stepOptions() {
        ob_start();

        // Fix from here
        ?>
        Extended

        <?php
        return ob_get_clean();
    }

   
     // Steps 
     protected function steps() {
        ob_start();
        ?>
            <div class="calculator__wraper__content__form__tab" x-show="currentStep === 0">
                <?php echo $this->stepOptions(); ?>
            </div>
            
        <?php
        return ob_get_clean();
    }
}