import { EncodingScheme } from "@/types/encodingScheme";
import { SignalLevel } from "@/types/signalLevel";

export class LineCoding {
  static _state: SignalLevel = SignalLevel.LOW;

  static toggleSignal(): SignalLevel {
    return LineCoding._state === SignalLevel.HIGH
      ? SignalLevel.LOW
      : SignalLevel.HIGH;
  }

  static nonReturnToZeroInverted(bit: number): SignalLevel {
    if (bit === SignalLevel.HIGH) {
      LineCoding._state = LineCoding.toggleSignal();
    }
    return LineCoding._state;
  }

  static bipolarAMI(bit: number) {
    if (bit === SignalLevel.HIGH)
      return (LineCoding._state = LineCoding.toggleSignal());
    else return SignalLevel.ZERO;
  }

  static pseudoternary(bit: number) {
    if (bit === SignalLevel.LOW)
      return (LineCoding._state = LineCoding.toggleSignal());
    else return SignalLevel.ZERO;
  }

  static manchester(bit: number) {
    if (bit === SignalLevel.HIGH)
      return SignalLevel.LOW_TO_HIGH
    return SignalLevel.HIGH_TO_LOW
  }

  static convert(scheme: string, input: number[]) {
    let result: SignalLevel[] = [];
    switch (scheme) {
      case EncodingScheme.NRZ_I:
        result = input.map((bit) => LineCoding.nonReturnToZeroInverted(bit));
        break;
      case EncodingScheme.BIPOLAR_AMI:
        result = input.map((bit) => LineCoding.bipolarAMI(bit));
        break;
      case EncodingScheme.PSEUDOTERNARY:
        result = input.map((bit) => LineCoding.pseudoternary(bit));
        break;
      case EncodingScheme.MANCHESTER:
        result = input.map((bit) => LineCoding.manchester(bit));
        break;
      default:
        break;
    }
    return result;
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
