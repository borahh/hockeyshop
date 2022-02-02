import Alpine from 'alpinejs';
import { BauerIcehockeySkates } from './calculator/types/BauerIcehockeySkates';
import { CCMSkates } from './calculator/types/CCMSkates';
import { ShoulderPadsJR } from './calculator/types/ShoulderPadsJR';

if (Alpine) {
  Alpine.data('BauerIcehockeySkates', BauerIcehockeySkates);
  Alpine.data('CCMSkates', CCMSkates);
  Alpine.data('ShoulderPadsJR', ShoulderPadsJR);
  Alpine.start();
}
