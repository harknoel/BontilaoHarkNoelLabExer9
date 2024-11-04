import { EncodingScheme } from "@/types/EncodingScheme";
import { BorderBuilder } from "./BorderBuilder";
import { SignalLevel } from "@/types/SignalLevel";

export function top_color(scheme: string, bit: number): string {
  const borderBuilder = new BorderBuilder();

  switch (scheme) {
    case EncodingScheme.NRZ_L:
    case EncodingScheme.NRZ_I:
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
      if (bit === 0) {
        return borderBuilder.bottom().build();
      }
      break;
    default:
      return "";
  }

  return "";
}

export function transition_color(output: SignalLevel[], index: number) {
  const borderBuilder = new BorderBuilder();
  console.log(transition(output, index));
  if (transition(output, index) === true) {
    return borderBuilder.left().build();
  }
}

export function transition(output: SignalLevel[], index: number) {
  if (index === 0) return;
  return output[index - 1] !== output[index];
}
