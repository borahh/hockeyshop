import { ElbowPads } from './base';

export function ElbowPadsJR() {
  return {
    ...ElbowPads,
    input: {
        foreArmLength: 16,
        bicepCirc: 18,
        height: 127,
    },
    rangeFrom: {
      foreArmLength: 16,
      bicepCirc: 18,
      height: 127,
    },
    rangeTo: {
      foreArmLength: 25,
      bicepCirc: 28,
      height: 157,
    },
    getResult() {
      const foreArmLength = this.invert(parseInt(this.input.foreArmLength, 10));
      const bicepCirc = this.invert(parseInt(this.input.bicepCirc, 10));
      const height = this.invert(parseInt(this.input.height, 10));
       
      if(foreArmLength >=16 && foreArmLength <=20 &&bicepCirc >=18 && bicepCirc <= 23 && height >=127 && height <=137){
        return 'S'
      }else if(foreArmLength >=18 && foreArmLength <=22 &&bicepCirc >=20 && bicepCirc <= 25 && height >=137 && height <=147){
        return 'M'
      }else if(foreArmLength >=20 && foreArmLength <=25 &&bicepCirc >=23 && bicepCirc <= 28 && height >=147 && height <=157){
        return 'L'
      }

     
    },
  };
}