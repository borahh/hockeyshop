import Alpine from 'alpinejs';
import { calculatorUI } from './calculator/ui';

if (Alpine) {
  Alpine.data('calculator-ui', calculatorUI);
}
