import { Gloves } from './base';

export function GlovesJR() {
  return {
    ...Gloves,
    input: {
      length:13
    },
    rangeFrom: {
      length:13
    },
    rangeTo: {
      length: 18
    },
    getResult() {
      const length = this.invert(parseInt(this.input.length, 10));
       
      if(length >= 13 && length <=15.5){
        return '10'
      }else if(length >= 14 && length <=16.5){
        return '11'
      }else if(length >= 15.5 && length <=18){
        return '12'
      }

     
    },
  };
}