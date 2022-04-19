import { PlayerPants } from './BauerBase';

export function BauerPlayerPantsSR() {
  return {
    ...PlayerPants,

    input: {
      waist: 82,
    },
    rangeFrom: {
      waist: 82,
    },
    rangeTo: {
      waist: 102,
    },
    getResult() {
      const waist = this.invert(parseInt(this.input.waist, 10));

      if (waist >= 82 && waist <= 88) {
        return 'M';
      } else if (waist >= 89 && waist <= 96) {
        return 'L';
      } else if (waist >= 97 && waist <= 102) {
        return 'XL';
      }
    },
  };
}
