<?php

class BorahhCalculatorBase {

    // Variation dependencies
    public $dependencies = [''];

    // ACF Fields
    public $fields = [''];


    public function __construct($dependencies = [''], $fields = ['']) {
        $this->dependencies = $dependencies;
        $this->fields = $fields;
    }

    protected function accordionResult() {
        return 'OK';
    }

    // Loaders
    protected function loaders() {
        ob_start();
        ?>
            <span id="AvailableVariationsLoader" data-variations='<?php echo json_encode($this->dependencies); ?>'></span>
        <?php
        return ob_get_clean();
    }

    // Steps 
    protected function steps() {
        ob_start();
        ?>
            <div class="calculator__wraper__content__form__tab">Extend this method to include steps</div>
        <?php
        return ob_get_clean();
    }

    // Matched Function
    protected function onMatchedVariations() {
        ob_start();
        ?>
            Extend
        <?php
        return ob_get_clean();
    }
    
    // Unmatched Variations
    protected function onUnmatchedVariations() {
        if (isset($_POST['enquiryVariation'])){	
            $to = 'lars@skatertown.dk';
            $subject = 'Variation Enquiry for' . ' ' . get_the_title();
            
            // Lines
            $dataName = 'Name: ' . $_POST['name'] . '<br/><br/><br/>';
            $dataEmail = 'Email: ' . $_POST['email'] . '<br/>';
            $dataPhone = 'Phone: ' . $_POST['phone'] . '<br/>';
            $dataVariationLength = 'Length: ' . $_POST['variationLength'] . '<br/>';
            $dataVariationWidth = 'Width: ' . $_POST['variationWidth'] . '<br/>';
            
            $body = $dataVariationLength . $dataVariationWidth . $dataName . $dataEmail . $dataPhone;

            $headers = array('Content-Type: text/html; charset=UTF-8','From: HockeyShop <hockeyshop@hockeyshop.dk>');

            wp_mail( $to, $subject, $body, $headers );
        }
        ob_start(); ?>
        <div class="calculator__wraper__content__end__unmatched__content">
            <p><?php _e("Din anbefalede størrelse er", "hockeyshop-theme"); ?></p>
            <div>
                <span>6.5</span>/ <span>fit1</span>
            </div>
        </div>
        
        <div class="calculator__wraper__content__end__unmatched__info">
            <p><?php _e("Den anbefalede størrelse er ikke på lager.", "hockeyshop-theme"); ?></p>
            <p><?php _e("Ofte kan vi bestille varen hjem i løbet af få dage.", "hockeyshop-theme"); ?></p>
            <p><?php _e("Onsker du at blive kontaktet herom?", "hockeyshop-theme"); ?></p>
        </div>
        

        <form id="endTabForm" method="POST">
            <input type="text" name="name" placeholder='<?php _e("Navn", "hockeyshop-theme"); ?>' required>
            <input type="text" name="email" placeholder='<?php _e("E-mail", "hockeyshop-theme"); ?>' required>
            <input type="text" name="phone" placeholder='<?php _e("Telefon", "hockeyshop-theme"); ?>' required>
            <input type="hidden" name="variationLength">
            <input type="hidden" name="variationWidth">
            <input type="submit" name="enquiryVariation" x-ref='enquiryVariation'>
        </form>
        <?php
        return ob_get_clean();
    }


    // Step Navigtion
    protected function navigation() {
        ob_start();
        ?>

        <!-- Previous Step -->
        <div class="calculator__wraper__content__nav__control" :class="showPrevHandler" @click="handlePrev">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
                ></path>
            </svg>
            <span>
                <?php _e("Tilbage", "hockeyshop-theme"); ?>
            </span>
        </div>
        
        <!-- Step Count -->
        <div class="calculator__wraper__content__nav__step">
            <span x-text="getCurrentStep"></span>
            <span>/</span>
            <span x-text="getMaxStep"></span>
        </div>
        
        <!-- Next Step -->
        <div class="calculator__wraper__content__nav__control" x-show="showNextHandler" @click="handleNext">
            <span>
                <?php _e("Næste", "hockeyshop-theme"); ?>                             
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path>
            </svg>
        </div>

        <!-- Final Step -->
        <div class="calculator__wraper__content__nav__control" x-show="showFinalHandler" @click="handleFinal">
            <span>
                <?php _e("Vis resultat", "hockeyshop-theme"); ?>                             
            </span>
        </div>

        <?php
        return ob_get_clean();
    }

    // Handlers 
    protected function handlers() {
        ob_start();
        ?>
            <div @click="restart">
                <?php _e("Größe wiederfinden", "hockeyshop-theme"); ?>
            </div>
            <div x-show="!matchedVariations" @click="$refs.enquiryVariation.click()">
                <?php _e("Send forespørgsel", "hockeyshop-theme"); ?>
            </div>
            <div x-show="matchedVariations" @click="toggleOpen">
                <?php _e("Forstået", "hockeyshop-theme"); ?>
            </div>
        <?php
        return ob_get_clean();
    }

    // Render
    public function render() {
        ob_start();
        ?>

        
        
        <!-- Calculator Wraper -->
        <div class="calculator" x-data='BauerIcehockeySkates'>

            <!-- Calculator Loaders -->
            <?php echo $this->loaders(); ?>
            
            <!-- Calculator Accordion  -->
            <div class="calculator__accordion" @click="toggleOpen">
                <!-- Calculator Accordion Info -->
                <span class="calculator__accordion__info">
                    <img
                        class="calculator__accordion__info__icon"
                        src="https://cdn-icons-png.flaticon.com/512/2738/2738840.png"
                        alt
                    />
                    <span class="calculator__accordion__info__label" x-show="!onSubmit">
                        <span>
                            <?php _e("I tvivl om din størrelse?", "hockeyshop-theme"); ?>
                        </span>
                        <u>
                            <?php _e('Prøv størrelsesguiden', "hockeyshop-theme"); ?>
                        </u>
                    </span>
                    <span class="calculator__accordion__info__label" x-show="onSubmit">
                        <span>
                            <?php _e("Din anbefalede størrelse er", "hockeyshop-theme"); ?>
                        </span>
                    </span>
                </span>

                <!-- Calculator Result -->
                <span class="calculator__accordion__result" x-show="onDataObtained"><?php echo $this->accordionResult(); ?></span>

                <!-- Calculator Toggle -->
                <span class="calculator__accordion__toggle" :class="open ? 'calculator__accordion__toggle--active' : ''" x-show="!onDataObtained">
                    <span class="calculator__accordion__toggle__icon"></span>
                </span>
            </div>

            <!-- Calculator Wraper -->
            <div class="calculator__wraper" x-effect="onToggleOpen">
                <div class="calculator__wraper__content">
                    <!-- Calculator Form -->
                    <form class="calculator__wraper__content__form" id="calculatorForm" x-show="!onSubmit">
                        <?php echo $this->steps(); ?>
                    </form>

                    <!-- Calculator End Tab -->
                    <div class="calculator__wraper__content__end" x-show="onSubmit">
                        <div class="calculator__wraper__content__end__unmatched" x-show="!matchedVariations">
                            <?php echo $this->onUnmatchedVariations(); ?>
                        </div>
                        
                        <div class="calculator__wraper__content__end__matched" x-show="matchedVariations">
                            <?php echo $this->onMatchedVariations(); ?>
                        </div>

                        <div class="calculator__wraper__content__end__handlers">
                            <?php echo $this->handlers(); ?>             
                        </div>
                    </div>
                    
                    <!-- Calculator Nav -->
                    <div class="calculator__wraper__content__nav" x-show="!onSubmit">
                        <?php echo $this->navigation(); ?>             
                    </div>

                    
                </div>
            </div>
            
        </div>

        <?php
        return ob_get_clean();
    }
}

