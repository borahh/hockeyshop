import { ShoulderPads } from './base';

export function ShoulderPadsWOMEN() {
  return {
    ...ShoulderPads,
    input: {
      chest: 60,
      height: 127,
    },
    rangeFrom: {
      chest: 60,
      height: 127,
    },
    rangeTo: {
      chest: 89,
      height: 157,
    },
    getResult() {
      const x = this.invert(parseInt(this.input.chest, 10));
      const y = this.invert(parseInt(this.input.height, 10));

      if (x >= 60 && x <= 76 && y >= 127 && y <= 137) {
        return 'S';
      } else if (x >= 67 && x <= 81 && y >= 137 && y <= 147) {
        return 'M';
      } else if (x >= 75 && x <= 89 && y >= 147 && y <= 157) {
        return 'L';
      }
    },
  };
}
