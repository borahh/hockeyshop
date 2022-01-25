<?php
class BauerIcehockeySkates extends BorahhCalculatorBase {
    public $parentObject;

    public function __construct($parentObject) {
        $this->parentObject = $parentObject;
    }

    public function render() {
        return $this->parentObject->render();
    }
}