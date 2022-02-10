import { ShoulderPads } from "./base";

export function ShoulderPadsYT() {
  return {
    ...ShoulderPads,
    input: {
      chest: 58,
      height: 102,
    },
    rangeFrom: {
      chest: 58,
      height: 102,
    },
    rangeTo: {
      chest: 70,
      height: 127,
    },
    getResult() {
      const chest = this.invert(parseInt(this.input.chest, 10));
      const height = this.invert(parseInt(this.input.height, 10));

      if ( chest <= 58 && height >= 102 && height <= 109) {
        return "S";
      } else if (chest >=58 && chest <= 64 && height >= 102 && height <= 122) {
        return "M";
      } else if (chest >= 60 && chest <= 70 && height >= 117 && height <= 127) {
        return "L";
      }
    },
  };
}
