import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { EncodingScheme } from "@/types/encodingScheme";
import { useState } from "react";
import { SignalLevel } from "@/types/signalLevel";

const Scheme = () => {
  const [selectedEncoding, setSelectedEncoding] = useState<
    EncodingScheme | undefined
  >();

  let binarySequence1 = "01001110";
  let binarySequence = Array.from(binarySequence, Number);

  function nonReturnToZeroInverted() {
    let status = SignalLevel.LOW;
    const digitalSignal = [];

    // if 0101001 no transition
    //    0000000
    //   [0110001]
    // if 01 has transition

    // if 0101001001 no transition
    //   [0110001110]

    for (let i = 0; i < binarySequence.length; i++) {
      // there is a transition
      if (binarySequence[i] === SignalLevel.HIGH) {
        if (status === SignalLevel.LOW) {
          digitalSignal.push(SignalLevel.HIGH);
          status = SignalLevel.HIGH;
        } else if (status === SignalLevel.HIGH) {
          digitalSignal.push(SignalLevel.LOW);
          status = SignalLevel.LOW;
        }
      } else {
        digitalSignal.push(status);
      }
    }

    return digitalSignal.join("");
  }

  function bipolarAMI() {
    let status = SignalLevel.LOW;
    const digitalSignal = [];

    for (let i = 0; i < binarySequence.length; i++) {
      // there is a transition
      if (binarySequence[i] === SignalLevel.HIGH) {
        if (status === SignalLevel.LOW) {
          digitalSignal.push(SignalLevel.HIGH);
          status = SignalLevel.HIGH;
        } else if (status === SignalLevel.HIGH) {
          digitalSignal.push(SignalLevel.LOW);
          status = SignalLevel.LOW;
        }
      } else {
        digitalSignal.push(SignalLevel.ZERO);
      }
    }

    return digitalSignal.join("");
  }

  function pseudoternary() {
    let status = SignalLevel.LOW;
    const digitalSignal = [];

    for (let i = 0; i < binarySequence.length; i++) {
      // there is a transition
      if (binarySequence[i] === SignalLevel.LOW) {
        if (status === SignalLevel.LOW) {
          digitalSignal.push(SignalLevel.HIGH);
          status = SignalLevel.HIGH;
        } else if (status === SignalLevel.HIGH) {
          digitalSignal.push(SignalLevel.LOW);
          status = SignalLevel.LOW;
        }
      } else {
        digitalSignal.push(SignalLevel.ZERO);
      }
    }

    return digitalSignal.join("");
  }

  function manchester() {
    const digitalSignal = [];

    for (let i = 0; i < binarySequence.length; i++) {
      if (binarySequence[i] === "0") {
        digitalSignal.push([
          SignalLevel.HIGH,
          SignalLevel.LOW,
        ]);
      }

      if (binarySequence[i] === "1") {
        digitalSignal.push([
          SignalLevel.LOW,
          SignalLevel.HIGH,
        ]);
      }
    }

    return digitalSignal.join("");
  }

  function differentialManchester() {
    const initial = SignalLevel.HIGH;
    let status = initial;
    const digitalSignal = [];

    for (let i = 0; i < binarySequence.length; i++) {
      if (binarySequence[i] === SignalLevel.LOW) {
        if (status === SignalLevel.HIGH) {
          digitalSignal.push([
            SignalLevel.LOW,
            SignalLevel.HIGH,
          ]);
          status = SignalLevel.HIGH;
        } else if (status === SignalLevel.LOW) {
          digitalSignal.push([
            SignalLevel.HIGH,
            SignalLevel.LOW,
          ]);
          status = SignalLevel.LOW;
        }
      } else {
        if (status === SignalLevel.LOW) {
          digitalSignal.push([
            SignalLevel.LOW,
            SignalLevel.HIGH,
          ]);
          status = SignalLevel.HIGH;
        } else if (status === SignalLevel.HIGH) {
          digitalSignal.push([
            SignalLevel.HIGH,
            SignalLevel.LOW,
          ]);
          status = SignalLevel.LOW;
        }
      }
    }

    console.log(digitalSignal);
    console.log(digitalSignal.join(""));
    return digitalSignal.join("");
  }

  const hasTransition = (index: number) => {
    if (index === 0) return false;
    return binarySequence[index] !== binarySequence[index - 1];
  };

  switch (selectedEncoding) {
    case EncodingScheme.NRZ_I:
      binarySequence = nonReturnToZeroInverted();
      break;
    case EncodingScheme.BIPOLAR_AMI:
      binarySequence = bipolarAMI();
      break;
    case EncodingScheme.PSEUDOTERNARY:
      binarySequence = pseudoternary();
      break;
    case EncodingScheme.MANCHESTER:
      binarySequence = manchester();
      break;
    case EncodingScheme.DIFFERENTIAL_MANCHESTER:
      binarySequence = differentialManchester();
      break;
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl">
        <Table className="table-fixed border-collapse">
          <TableBody>
            {/* Top row */}
            <TableRow>
              {[...binarySequence].map((bit, index) => (
                <>
                  <TableCell
                    key={`top-${index}`}
                    className={`w-24 h-16 border border-gray-300 relative
                  ${
                    bit === SignalLevel.HIGH
                      ? "border-t-4 border-t-red-500"
                      : ""
                  }
                  ${
                    hasTransition(index) === true
                      ? "border-l-4 border-l-red-500"
                      : ""
                  }  `}
                  ></TableCell>
                  <TableCell
                    key={`top-${index}`}
                    className={`w-24 h-16 border border-gray-300 relative
                  ${
                    bit === SignalLevel.HIGH
                      ? "border-t-4 border-t-red-500"
                      : ""
                  } `}
                  ></TableCell>
                </>
              ))}
            </TableRow>

            {/* Bottom row */}
            <TableRow>
              {[...binarySequence].map((bit, index) => (
                <>
                  <TableCell
                    key={`bottom-${index}`}
                    className={`w-24 h-16 border border-gray-300 relative
                  ${
                    bit === SignalLevel.LOW
                      ? "border-b-4 border-b-red-500"
                      : ""
                  }
                  ${
                    hasTransition(index) === true
                      ? "border-l-4 border-l-red-500"
                      : ""
                  }
                  ${
                    bit === SignalLevel.ZERO
                      ? "border-t-4 border-t-red-500"
                      : ""
                  }
                  `}
                  >
                    <div className="absolute bottom-2 left-0 right-0 text-center">
                      {bit}
                    </div>
                  </TableCell>
                  <TableCell
                    key={`bottom-${index}`}
                    className={`w-24 h-16 border border-gray-300 relative
                  ${
                    bit === SignalLevel.LOW
                      ? "border-b-4 border-b-red-500"
                      : ""
                  }
                  ${
                    bit === SignalLevel.ZERO
                      ? "border-t-4 border-t-red-500"
                      : ""
                  }
                  `}
                  ></TableCell>
                </>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="p-10">
        <select>
          <option value={EncodingScheme.NRZ_L}>NRZ - L</option>
          <option value={EncodingScheme.NRZ_I}>NRZ - I</option>
          <option value={EncodingScheme.BIPOLAR_AMI}>
            Bipolar - AMI
          </option>
          <option value={EncodingScheme.PSEUDOTERNARY}>
            Pseudoternary
          </option>
          <option value={EncodingScheme.MANCHESTER}>
            Manchester
          </option>
          <option value={EncodingScheme.DIFFERENTIAL_MANCHESTER}>
            Differential Manchester
          </option>
        </select>
      </div>
    </div>
  );
};

export default Scheme;
