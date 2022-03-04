import Alpine from 'alpinejs';
import { BauerIcehockeySkates } from './calculator/types/BauerIcehockeySkates';
import { CCMSkates } from './calculator/types/CCMSkates';
import {
  CCMShoulderPadsJR,
  CCMShoulderPadsSR,
  CCMShoulderPadsWOMEN,
  CCMShoulderPadsYT,
} from './calculator/types/ShoulderPads';

if (Alpine) {
  Alpine.data('BauerIcehockeySkates', BauerIcehockeySkates);
  Alpine.data('CCMSkates', CCMSkates);
  Alpine.data('CCMShoulderPadsJR', CCMShoulderPadsJR);
  Alpine.data('CCMShoulderPadsYT', CCMShoulderPadsYT);
  Alpine.data('CCMShoulderPadsSR', CCMShoulderPadsSR);
  Alpine.data('CCMShoulderPadsWOMEN', CCMShoulderPadsWOMEN);
  Alpine.start();
}
