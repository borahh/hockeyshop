import { PlayerPants } from './base';

export function PlayerPantsSR() {
  return {
    ...PlayerPants,

    input: {
      waist: 81,
    },
    rangeFrom: {
      waist: 81,
    },
    rangeTo: {
      waist: 115,
      // THIS IS NOT ACCURATE VALUE
    },
    getResult() {
      const waist = this.invert(parseInt(this.input.waist, 10));

      if (waist >= 81 && waist <= 91) {
        return 'M';
      } else if (waist >= 86 && waist <= 97) {
        return 'L';
      } else if (waist >= 91 && waist <= 102) {
        return 'XL';
      } else if (waist >= 97 && waist <= 107) {
        return 'XXL';
      } else if (waist >= 102) {
        return 'XXXL';
      }
    },
  };
}
