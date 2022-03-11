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
  CCMPlayerPantsJR,
  CCMPlayerPantsSR,
  CCMPlayerPantsWOMEN,
  CCMPlayerPantsYT,
} from './calculator/types/PlayerPants';
import {
  CCMShinGuardsJR,
  CCMShinGuardsSR,
  CCMShinGuardsYT,
} from './calculator/types/ShinGuards';
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
  Alpine.data('CCMShinGuardsJR', CCMShinGuardsJR);
  Alpine.data('CCMShinGuardsSR', CCMShinGuardsSR);
  Alpine.data('CCMShinGuardsYT', CCMShinGuardsYT);
  Alpine.data('CCMPlayerPantsJR', CCMPlayerPantsJR);
  Alpine.data('CCMPlayerPantsSR', CCMPlayerPantsSR);
  Alpine.data('CCMPlayerPantsWOMEN', CCMPlayerPantsWOMEN);
  Alpine.data('CCMPlayerPantsYT', CCMPlayerPantsYT);
  Alpine.start();
}
