import { EncodingScheme } from "@/types/EncodingScheme";
import { BorderBuilder } from "./BorderBuilder";

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
        console.log(borderBuilder.bottom().build());
        return borderBuilder.bottom().build();
      }
      break;
    default:
      return "";
  }

  return "";
}
