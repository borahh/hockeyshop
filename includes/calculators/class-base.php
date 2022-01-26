<?php

class BorahhCalculatorBase {
    // Loaders
    protected function loaders() {}

    // Steps 
    protected function steps() {}

    // Matched Variations
    protected function onMatchedVariations() {
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
        <form class="calculator__wraper__content__end__unmatched" id="endTabForm" method="POST">
            <input type="text" name="name" placeholder='<?php _e("Navn", "hockeyshop-theme"); ?>' required>
            <input type="text" name="email" placeholder='<?php _e("E-mail", "hockeyshop-theme"); ?>' required>
            <input type="text" name="phone" placeholder='<?php _e("Telefon", "hockeyshop-theme"); ?>' required>
            <input type="hidden" name="variationLength">
            <input type="hidden" name="variationWidth">
            <input type="submit" name="enquiryVariation" value='<?php _e("Send forespørgsel", "hockeyshop-theme"); ?>'>
        </form>
        <?php
        return ob_get_clean();
    }

    // Render
    public function render() {
        ob_start();
        ?>
        
        <!-- Calculator Wraper -->
        <div class="calculator" x-data='calculatorUI'>

        
            <!-- Calculator Accordion  -->
            <div class="calculator__accordion" @click="toggle">
                <!-- Calculator Accordion Info -->
                <span class="calculator__accordion__info">
                    <img
                        class="calculator__accordion__info__icon"
                        src="https://cdn-icons-png.flaticon.com/512/2738/2738840.png"
                        alt
                    />
                    <span class="calculator__accordion__info__label">
                        <span>
                            <?php _e("I tvivl om din størrelse?", "hockeyshop-theme"); ?>
                        </span>
                        <u>
                            <?php _e('Prøv størrelsesguiden', "hockeyshop-theme"); ?>
                        </u>
                    </span>
                </span>

                <!-- Calculator Result -->
                <span class="calculator__accordion__result"></span>

                <!-- Calculator Toggle -->
                <span class="calculator__accordion__toggle" :class="open ? 'calculator__accordion__toggle--active' : ''">
                    <span class="calculator__accordion__toggle__icon"></span>
                </span>
            </div>

            <!-- Calculator Wraper -->
            <div class="calculator__wraper" x-effect="toggleWraper">
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
                        <?php echo $this->onUnmatchedVariations(); ?>
                    </div>
                </div>
            </div>
            
        </div>

        <?php
        return ob_get_clean();
    }
}

