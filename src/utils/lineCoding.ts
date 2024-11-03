import { EncodingScheme } from "@/types/encodingScheme";
import { SignalLevel } from "@/types/signalLevel";

export class LineCoding {
  static _state: SignalLevel = SignalLevel.LOW;
  static _prevState: SignalLevel = SignalLevel.HIGH
    ? SignalLevel.LOW_TO_HIGH
    : SignalLevel.HIGH_TO_LOW;

  static toggleSignal(): SignalLevel {
    return LineCoding._state === SignalLevel.HIGH
      ? SignalLevel.LOW
      : SignalLevel.HIGH;
  }

  static nonReturnToZeroInverted(bit: number): SignalLevel {
    if (bit === 1) {
      LineCoding._state = LineCoding.toggleSignal();
    }
    return LineCoding._state;
  }

  static bipolarAMI(bit: number) {
    if (bit === 1) return (LineCoding._state = LineCoding.toggleSignal());
    else return SignalLevel.ZERO;
  }

  static pseudoternary(bit: number) {
    if (bit === 0) return (LineCoding._state = LineCoding.toggleSignal());
    else return SignalLevel.ZERO;
  }

  static manchester(bit: number) {
    if (bit === 1) return SignalLevel.LOW_TO_HIGH;
    return SignalLevel.HIGH_TO_LOW;
  }

  static differentialManchester(bit: number) {
    if (bit === 1) {
      if (LineCoding._prevState === SignalLevel.HIGH_TO_LOW) {
        LineCoding._prevState = SignalLevel.LOW_TO_HIGH;
      } else {
        LineCoding._prevState = SignalLevel.HIGH_TO_LOW;
      }
    }
    return LineCoding._prevState;
  }

  static convert(scheme: string, input: number[]) {
    let result: SignalLevel[] = [];
    switch (scheme) {
      case EncodingScheme.NRZ_L:
        result = input;
        break;
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
      case EncodingScheme.DIFFERENTIAL_MANCHESTER:
        result = input.map((bit) => LineCoding.differentialManchester(bit));
        break;
    }
    return result;
  }
}
