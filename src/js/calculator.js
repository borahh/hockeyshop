import Alpine from 'alpinejs';
import { BauerIcehockeySkates } from './calculator/types/BauerIcehockeySkates';
import { CCMSkates } from './calculator/types/CCMSkates';
import {
  CCMElbowPadsJR,
  CCMElbowPadsSR,
  CCMElbowPadsYT,
} from './calculator/types/ElbowPads';
import {
  CCMGlovesJR,
  CCMGlovesSR,
  CCMGlovesYT,
} from './calculator/types/Gloves';
import {
  CCMShoulderPadsJR,
  CCMShoulderPadsSR,
  CCMShoulderPadsWOMEN,
  CCMShoulderPadsYT,
} from './calculator/types/ShoulderPads';

if (Alpine) {
  Alpine.data('BauerIcehockeySkates', BauerIcehockeySkates);
  Alpine.data('CCMSkates', CCMSkates);
  Alpine.data('CCMGlovesSR', CCMGlovesSR);
  Alpine.data('CCMGlovesJR', CCMGlovesJR);
  Alpine.data('CCMGlovesYT', CCMGlovesYT);
  Alpine.data('CCMShoulderPadsJR', CCMShoulderPadsJR);
  Alpine.data('CCMShoulderPadsYT', CCMShoulderPadsYT);
  Alpine.data('CCMShoulderPadsSR', CCMShoulderPadsSR);
  Alpine.data('CCMShoulderPadsWOMEN', CCMShoulderPadsWOMEN);
  Alpine.data('CCMElbowPadsSR', CCMElbowPadsSR);
  Alpine.data('CCMElbowPadsJR', CCMElbowPadsJR);
  Alpine.data('CCMElbowPadsYT', CCMElbowPadsYT);
  Alpine.start();
}
