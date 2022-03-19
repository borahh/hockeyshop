import { PlayerPants } from './base';

export function PlayerPantsYT() {
  return {
    ...PlayerPants,

    input: {
      waist: 48,
    },
    rangeFrom: {
      waist: 48,
    },
    rangeTo: {
      waist: 62,
    },
    getResult() {
      const waist = this.invert(parseInt(this.input.waist, 10));

      if (waist >= 48 && waist <= 53) {
        return 'S';
      } else if (waist >= 51 && waist <= 56) {
        return 'M';
      } else if (waist >= 54 && waist <= 62) {
        return 'L';
      }
    },
  };
}
