import { PlayerPants } from './BauerBase';

export function BauerPlayerPantsSR() {
  return {
    ...PlayerPants,
    input: {
      waist: 86,
    },
    rangeFrom: {
      waist: 86,
    },
    rangeTo: {
      waist: 102,
    },
    getResult() {
      const waist = this.invert(parseInt(this.input.waist, 10));

      if (waist >= 86 && waist <= 91) {
        return 'M';
      } else if (waist >= 92 && waist <= 97) {
        return 'L';
      } else if (waist >= 98 && waist <= 102) {
        return 'XL';
      }
    },
  };
}
