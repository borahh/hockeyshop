import { ShinGuards } from './base';

export function ShinGuardsYT() {
  return {
    ...ShinGuards,
    input: {
      height: 102,
      length:20
    },
    rangeFrom: {
        height: 102,
        length:20
    },
    rangeTo: {
        height: 132,
        length:28
    },
    getResult() {
      const length = this.invert(parseInt(this.input.length, 10));
      const height = this.invert(parseInt(this.input.height, 10));
       
      if( height >= 102 && height<=112 && length >= 20 && length <=23){
        return '8'
      }else if( height >= 112 && height<=122 && length >= 23 && length <=25){
        return '9'
      }else if( height >= 122 && height<=132 && length >= 25 && length <=28){
        return '10'
      }

     
    },
  };
}