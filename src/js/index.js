import './calculator';
import { getAllFormElements } from './calculator/helpers/getAllFormElements';

function calculateFit() {
  const x = getAllFormElements(document.getElementById('calculatorForm'));
  console.log(x);
}

calculateFit();
