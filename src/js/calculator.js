import Alpine from 'alpinejs';
import { BauerIcehockeySkates } from './calculator/types/BauerIcehockeySkates';
import { CCMSkates } from './calculator/types/CCMSkates';
import {
  ShoulderPadsJR,
  ShoulderPadsSR,
  ShoulderPadsWOMEN,
  ShoulderPadsYT,
} from './calculator/types/ShoulderPads';

if (Alpine) {
  Alpine.data('BauerIcehockeySkates', BauerIcehockeySkates);
  Alpine.data('CCMSkates', CCMSkates);
  Alpine.data('ShoulderPadsJR', ShoulderPadsJR);
  Alpine.data('ShoulderPadsYT', ShoulderPadsYT);
  Alpine.data('ShoulderPadsSR', ShoulderPadsSR);
  Alpine.data('ShoulderPadsWOMEN', ShoulderPadsWOMEN);
  Alpine.start();
}
