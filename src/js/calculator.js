import Alpine from 'alpinejs';
import { BauerIcehockeySkates } from './calculator/types/BauerIcehockeySkates';
import { CCMSkates } from './calculator/types/CCMSkates';

if (Alpine) {
  Alpine.data('BauerIcehockeySkates', BauerIcehockeySkates);
  Alpine.data('CCMSkates', CCMSkates);
  Alpine.start();
}
