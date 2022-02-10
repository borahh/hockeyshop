import { ElbowPads } from './base';

export function ElbowPadsYT() {
  return {
    ...ElbowPads,
    input: {
        foreArmLength: 11,
        bicepCirc: 14,
        height: 102,
    },
    rangeFrom: {
      foreArmLength: 11,
      bicepCirc: 14,
      height: 102,
    },
    rangeTo: {
      foreArmLength: 19,
      bicepCirc: 21,
      height: 127,
    },
    getResult() {
      const foreArmLength = this.invert(parseInt(this.input.foreArmLength, 10));
      const bicepCirc = this.invert(parseInt(this.input.bicepCirc, 10));
      const height = this.invert(parseInt(this.input.height, 10));
       
      if(foreArmLength >=11 && foreArmLength <=15 &&bicepCirc >=14 && bicepCirc <= 17 && height >=102 && height <=109){
        return 'S'
      }else if(foreArmLength >=14 && foreArmLength <=17 &&bicepCirc >=16 && bicepCirc <= 19 && height >=109 && height <=117){
        return 'M'
      }else if(foreArmLength >=15 && foreArmLength <=19 &&bicepCirc >=18 && bicepCirc <= 21 && height >=117 && height <=127){
        return 'L'
      }

     
    },
  };
}