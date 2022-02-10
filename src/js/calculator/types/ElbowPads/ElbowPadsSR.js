import { ElbowPads } from './base';

export function ElbowPadsSR() {
  return {
    ...ElbowPads,
    input: {
        foreArmLength: 23,
        bicepCirc: 25,
        height: 157,
    },
    rangeFrom: {
      foreArmLength: 23,
      bicepCirc: 25,
      height: 157,
    },
    rangeTo: {
      foreArmLength: 32,
      bicepCirc: 41,
      height: 188,
    },
    getResult() {
      const foreArmLength = this.invert(parseInt(this.input.foreArmLength, 10));
      const bicepCirc = this.invert(parseInt(this.input.bicepCirc, 10));
      const height = this.invert(parseInt(this.input.height, 10));
       
      if(foreArmLength >=23 && foreArmLength <=27 &&bicepCirc >=25 && bicepCirc <= 30 && height >=157 && height <=168){
        return 'S'
      }else if(foreArmLength >=25 && foreArmLength <=29 &&bicepCirc >=28 && bicepCirc <= 36 && height >=168 && height <=178){
        return 'M'
      }else if(foreArmLength >=28 && foreArmLength <=32 &&bicepCirc >=33 && bicepCirc <= 41 && height >=178 && height <=188){
        return 'L'
      }else if(foreArmLength >=29  &&bicepCirc >=38  && height >=183 ){
        return 'XL'
      }

     
    },
  };
}