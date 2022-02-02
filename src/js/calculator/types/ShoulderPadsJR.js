import { calculatorUI } from '../ui';
import { cmToInch } from '../unitConverter';

export function ShoulderPadsJR() {
  return {
    ...calculatorUI,
    ...cmToInch,
    maxStep: 0,
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
  };
}
