import { EncodingScheme } from "@/types/EncodingScheme";
import { BorderBuilder } from "./BorderBuilder";
import { SignalLevel } from "@/types/SignalLevel";

export function top_color(scheme: string, bit: number): string {
  const borderBuilder = new BorderBuilder();

  switch (scheme) {
    case EncodingScheme.NRZ_L:
    case EncodingScheme.NRZ_I:
    case EncodingScheme.BIPOLAR_AMI:
    case EncodingScheme.PSEUDOTERNARY:
      if (bit === 1) {
        return borderBuilder.top().build();
      }
      break;
    default:
      return "";
  }

  return "";
}

export function bottom_color(scheme: string, bit: number): string {
  const borderBuilder = new BorderBuilder();

  switch (scheme) {
    case EncodingScheme.NRZ_L:
    case EncodingScheme.NRZ_I:
      if (bit === SignalLevel.LOW) {
        return borderBuilder.bottom().build();
      }
      break;
    case EncodingScheme.BIPOLAR_AMI:
    case EncodingScheme.PSEUDOTERNARY:
      if (bit === SignalLevel.LOW) {
        return borderBuilder.bottom().build();
      }
      if (bit === SignalLevel.ZERO) {
        return borderBuilder.top().build();
      }
      break;
    default:
      return "";
  }

  return "";
}

export function transition_color(
  scheme: string,
  output: SignalLevel[],
  index: number
) {
  const borderBuilder = new BorderBuilder();

  switch (scheme) {
    case EncodingScheme.NRZ_L:
    case EncodingScheme.NRZ_I:
      if (transition(output, index)) {
        return borderBuilder.left().build();
      }
      break;
    case EncodingScheme.MANCHESTER:
    case EncodingScheme.DIFFERENTIAL_MANCHESTER:
      if (!transition(output, index)) {
        return borderBuilder.left().build();
      }
      break;
  }
}

export function transition(output: SignalLevel[], index: number) {
  if (index === 0) return;
  return output[index - 1] !== output[index];
}
