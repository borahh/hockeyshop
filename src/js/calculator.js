import Alpine from 'alpinejs';
import { BauerIcehockeySkates } from './calculator/types/BauerIcehockeySkates';
import { CCMSkates } from './calculator/types/CCMSkates';
import {
  BauerElbowPadsINT,
  BauerElbowPadsJR,
  BauerElbowPadsSR,
  CCMElbowPadsJR,
  CCMElbowPadsSR,
  CCMElbowPadsYT,
} from './calculator/types/ElbowPads';
import { BauerElbowPadsYT } from './calculator/types/ElbowPads/BauerElbowPadsYT';
import {
  BauerGlovesINT,
  BauerGlovesJR,
  BauerGlovesSR,
  BauerGlovesYT,
  CCMGlovesJR,
  CCMGlovesSR,
  CCMGlovesYT,
} from './calculator/types/Gloves';
import {
  BauerPlayerPantsINT,
  BauerPlayerPantsJR,
  BauerPlayerPantsSR,
  BauerPlayerPantsWomen,
  BauerPlayerPantsYT,
  CCMPlayerPantsJR,
  CCMPlayerPantsSR,
  CCMPlayerPantsWOMEN,
  CCMPlayerPantsYT,
} from './calculator/types/PlayerPants';
import {
  BauerShinGuardsINT,
  BauerShinGuardsJR,
  BauerShinGuardsSR,
  BauerShinGuardsYT,
  CCMShinGuardsJR,
  CCMShinGuardsSR,
  CCMShinGuardsYT,
} from './calculator/types/ShinGuards';
import {
  BauerShoulderPadsINT,
  BauerShoulderPadsJR,
  BauerShoulderPadsSR,
  BauerShoulderPadsWomen,
  BauerShoulderPadsYT,
  CCMShoulderPadsJR,
  CCMShoulderPadsSR,
  CCMShoulderPadsWOMEN,
  CCMShoulderPadsYT,
} from './calculator/types/ShoulderPads';

if (Alpine) {
  Alpine.data('BauerIcehockeySkates', BauerIcehockeySkates);
  Alpine.data('CCMSkates', CCMSkates);
  Alpine.data('BauerGlovesSR', BauerGlovesSR);
  Alpine.data('BauerGlovesJR', BauerGlovesJR);
  Alpine.data('BauerGlovesYT', BauerGlovesYT);
  Alpine.data('BauerGlovesINT', BauerGlovesINT);
  Alpine.data('CCMGlovesSR', CCMGlovesSR);
  Alpine.data('CCMGlovesJR', CCMGlovesJR);
  Alpine.data('CCMGlovesYT', CCMGlovesYT);
  Alpine.data('BauerShoulderPadsJR', BauerShoulderPadsJR);
  Alpine.data('BauerShoulderPadsSR', BauerShoulderPadsSR);
  Alpine.data('BauerShoulderPadsYT', BauerShoulderPadsYT);
  Alpine.data('BauerShoulderPadsINT', BauerShoulderPadsINT);
  Alpine.data('BauerShoulderPadsWOMEN', BauerShoulderPadsWomen);
  Alpine.data('CCMShoulderPadsJR', CCMShoulderPadsJR);
  Alpine.data('CCMShoulderPadsYT', CCMShoulderPadsYT);
  Alpine.data('CCMShoulderPadsSR', CCMShoulderPadsSR);
  Alpine.data('CCMShoulderPadsWOMEN', CCMShoulderPadsWOMEN);
  Alpine.data('BauerElbowPadsSR', BauerElbowPadsSR);
  Alpine.data('BauerElbowPadsJR', BauerElbowPadsJR);
  Alpine.data('BauerElbowPadsYT', BauerElbowPadsYT);
  Alpine.data('BauerElbowPadsINT', BauerElbowPadsINT);
  Alpine.data('CCMElbowPadsSR', CCMElbowPadsSR);
  Alpine.data('CCMElbowPadsJR', CCMElbowPadsJR);
  Alpine.data('CCMElbowPadsYT', CCMElbowPadsYT);
  Alpine.data('BauerShinGuardsJR', BauerShinGuardsJR);
  Alpine.data('BauerShinGuardsSR', BauerShinGuardsSR);
  Alpine.data('BauerShinGuardsYT', BauerShinGuardsYT);
  Alpine.data('BauerShinGuardsINT', BauerShinGuardsINT);
  Alpine.data('CCMShinGuardsJR', CCMShinGuardsJR);
  Alpine.data('CCMShinGuardsSR', CCMShinGuardsSR);
  Alpine.data('CCMShinGuardsYT', CCMShinGuardsYT);
  Alpine.data('BauerPlayerPantsJR', BauerPlayerPantsJR);
  Alpine.data('BauerPlayerPantsSR', BauerPlayerPantsSR);
  Alpine.data('BauerPlayerPantsYT', BauerPlayerPantsYT);
  Alpine.data('BauerPlayerPantsINT', BauerPlayerPantsINT);
  Alpine.data('BauerPlayerPantsWOMEN', BauerPlayerPantsWomen);
  Alpine.data('CCMPlayerPantsJR', CCMPlayerPantsJR);
  Alpine.data('CCMPlayerPantsSR', CCMPlayerPantsSR);
  Alpine.data('CCMPlayerPantsWOMEN', CCMPlayerPantsWOMEN);
  Alpine.data('CCMPlayerPantsYT', CCMPlayerPantsYT);
  Alpine.start();
}
