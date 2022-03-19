import { PlayerPants } from './base';

export function BauerPlayerPantsJR() {
  return {
    ...PlayerPants,

    input: {
      waist: 56,
    },
    rangeFrom: {
      waist: 56,
    },
    rangeTo: {
      waist: 72,
    },
    getResult() {
      const waist = this.invert(parseInt(this.input.waist, 10));
      if (waist >= 56 && waist <= 64) {
        return 'S';
      } else if (waist >= 62 && waist <= 66) {
        return 'M';
      } else if (waist >= 66 && waist <= 72) {
        return 'L';
      }
    },
  };
}
