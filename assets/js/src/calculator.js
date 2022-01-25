import Alpine from 'alpinejs';
import { calculatorUI } from './calculator/ui';

if (Alpine) {
  Alpine.data('calculatorUI', calculatorUI);
  Alpine.start();
}
