import { EncodingScheme } from "@/types/encodingScheme";
import { SignalLevel } from "@/types/signalLevel";

export class LineCoding {
  private _scheme: EncodingScheme
  private _state: SignalLevel;
  private _input: number[];
  private _output: number[][] = [];

  constructor(scheme: EncodingScheme, state: SignalLevel, input: number[]) {
    this._scheme = scheme
    this._state = state;
    this._input = input;
  }

  public set output(newOutput: number[][]) {
    this._output = newOutput;
  }

  toggleSignal(currentState: SignalLevel): SignalLevel {
    const newState =
      currentState === SignalLevel.HIGH ? SignalLevel.LOW : SignalLevel.HIGH;
    this._state = newState;
    return newState;
  }

  nonReturnToZeroInverted(bit: number): SignalLevel {
    if (bit === SignalLevel.HIGH) bit = this.toggleSignal(bit);
    return bit;
  }

  bipolarAMI(bit: number) {
    if (bit === SignalLevel.HIGH) bit = this.toggleSignal(bit);
    if (bit === SignalLevel.LOW) bit = SignalLevel.ZERO;
    return bit;
  }

  static convert(scheme: string) {
    switch(scheme) {
      case EncodingScheme.NRZ_I:
        console.log("Hello world")
        break
      default:
        break
    }
  }

  // nonReturnToZeroInverted(binarySequence: number[]) {
  // let status = SignalLevel.LOW;
  // const digitalSignal = [];

  //     if (binarySequence[i] === SignalLevel.HIGH) {
  //     status = toggleSignal(status);
  //     }
  //     digitalSignal.push(status);

  // return digitalSignal;
  // }

  // function bipolarAMI(binarySequence: number[]) {
  // let status = SignalLevel.LOW;
  // const digitalSignal = [];

  // for (let i = 0; i < binarySequence.length; i++) {
  //     // there is a transition
  //     if (binarySequence[i] === SignalLevel.HIGH) {
  //     if (status === SignalLevel.LOW) {
  //         digitalSignal.push(SignalLevel.HIGH);
  //         status = SignalLevel.HIGH;
  //     } else if (status === SignalLevel.HIGH) {
  //         digitalSignal.push(SignalLevel.LOW);
  //         status = SignalLevel.LOW;
  //     }
  //     } else {
  //     digitalSignal.push(SignalLevel.ZERO);
  //     }
  // }

  // return digitalSignal;
  // }

  // function pseudoternary(binarySequence: number[]) {
  // let status = SignalLevel.LOW;
  // const digitalSignal = [];

  // for (let i = 0; i < binarySequence.length; i++) {
  //     // there is a transition
  //     if (binarySequence[i] === SignalLevel.LOW) {
  //     if (status === SignalLevel.LOW) {
  //         digitalSignal.push(SignalLevel.HIGH);
  //         status = SignalLevel.HIGH;
  //     } else if (status === SignalLevel.HIGH) {
  //         digitalSignal.push(SignalLevel.LOW);
  //         status = SignalLevel.LOW;
  //     }
  //     } else {
  //     digitalSignal.push(SignalLevel.ZERO);
  //     }
  // }

  // return digitalSignal;
  // }

  // function manchester(binarySequence: number[]) {
  // const digitalSignal = [];

  // for (let i = 0; i < binarySequence.length; i++) {
  //     if (binarySequence[i] === SignalLevel.LOW) {
  //     digitalSignal.push([SignalLevel.HIGH, SignalLevel.LOW]);
  //     }

  //     if (binarySequence[i] === SignalLevel.HIGH) {
  //     digitalSignal.push([SignalLevel.LOW, SignalLevel.HIGH]);
  //     }
  // }

  // return digitalSignal;
  // }

  // function differentialManchester(binarySequence: number[]) {
  // const initial = SignalLevel.HIGH;
  // let status = initial;
  // const digitalSignal = [];

  // for (let i = 0; i < binarySequence.length; i++) {
  //     if (binarySequence[i] === SignalLevel.LOW) {
  //     if (status === SignalLevel.HIGH) {
  //         digitalSignal.push([SignalLevel.LOW, SignalLevel.HIGH]);
  //         status = SignalLevel.HIGH;
  //     } else if (status === SignalLevel.LOW) {
  //         digitalSignal.push([SignalLevel.HIGH, SignalLevel.LOW]);
  //         status = SignalLevel.LOW;
  //     }
  //     } else {
  //     if (status === SignalLevel.LOW) {
  //         digitalSignal.push([SignalLevel.LOW, SignalLevel.HIGH]);
  //         status = SignalLevel.HIGH;
  //     } else if (status === SignalLevel.HIGH) {
  //         digitalSignal.push([SignalLevel.HIGH, SignalLevel.LOW]);
  //         status = SignalLevel.LOW;
  //     }
  //     }
  // }

  // return digitalSignal;
  // }
}
