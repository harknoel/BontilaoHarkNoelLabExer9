import { Table, TableCell, TableRow, TableBody } from "@/components/ui/table";
import { EncodingScheme } from "@/types/EncodingScheme";
import { SignalLevel } from "@/types/SignalLevel";
import { top_color, bottom_color, transition_color } from "@/utils/helper";
import React from "react";

const TableComponent = ({
  scheme,
  input,
  result,
  isInitiallyHigh,
}: {
  scheme: string;
  input: number[];
  result: SignalLevel[];
  isInitiallyHigh: boolean;
}) => {
  return (
    <Table className="table-fixed border-collapse">
      <TableBody>
        <TableRow>
          {[...input].map((bit, index) => (
            <TableCell
              colSpan={2}
              key={`head-${index}`}
              className="w-24 h-16 border border-gray-300 relative text-center"
            >
              {bit}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          {[...result].map((bit, index) => (
            <React.Fragment key={`row1-${index}`}>
              <TableCell
                className={`w-24 h-16 border border-gray-300 relative ${top_color(
                  scheme,
                  bit
                )}
                ${transition_color(scheme, result, index)}
                ${scheme === EncodingScheme.MANCHESTER || EncodingScheme.DIFFERENTIAL_MANCHESTER ? (bit === 4 ? "!border-t-4 border-t-red-500 border-r-4 border-r-red-500" : "") : ""}
                ${scheme === EncodingScheme.BIPOLAR_AMI || scheme === EncodingScheme.PSEUDOTERNARY ? (isInitiallyHigh && index === 0 && result[index] === 2 ? "border-l-4 border-l-red-500" : "") : ""}
                ${scheme === EncodingScheme.BIPOLAR_AMI || scheme === EncodingScheme.PSEUDOTERNARY ? (isInitiallyHigh && index === 0 && result[index] === 0 ? "border-l-4 border-l-red-500" : "") : ""}`}
              ></TableCell>
              <TableCell
                className={`w-24 h-16 border border-gray-300 relative ${top_color(
                  scheme,
                  bit
                )}
                ${scheme === EncodingScheme.MANCHESTER || scheme === EncodingScheme.DIFFERENTIAL_MANCHESTER ? (bit === 3 ? "border-t-4 border-t-red-500 border-l-4 border-l-red-500" : "") : ""}
                ${scheme === EncodingScheme.BIPOLAR_AMI || scheme === EncodingScheme.PSEUDOTERNARY ? (result[index] === 2 && result[index + 1] === 1 ? "border-r-4 border-r-red-500" : "") : ""}
                ${scheme === EncodingScheme.BIPOLAR_AMI || scheme === EncodingScheme.PSEUDOTERNARY ? (result[index] === 1 && result[index + 1] === 2 ? "border-r-4 border-r-red-500" : "") : ""}
                ${scheme === EncodingScheme.BIPOLAR_AMI || scheme === EncodingScheme.PSEUDOTERNARY ? (result[index] === 0 && result[index + 1] === 1 ? "border-r-4 border-r-red-500" : "") : ""}
                ${scheme === EncodingScheme.BIPOLAR_AMI || scheme === EncodingScheme.PSEUDOTERNARY ? (result[index] === 1 && result[index + 1] === 0 ? "border-r-4 border-r-red-500" : "") : ""}
                ${scheme === EncodingScheme.BIPOLAR_AMI || scheme === EncodingScheme.PSEUDOTERNARY ? (result[index] === 1 && index + 1 === result.length ? "border-r-4 border-r-red-500" : "") : ""}`}
              ></TableCell>
            </React.Fragment>
          ))}
        </TableRow>
        <TableRow>
          {[...result].map((bit, index) => (
            <React.Fragment key={`row2-${index}`}>
              <TableCell
                className={`w-24 h-16 border border-gray-300 relative ${bottom_color(
                  scheme,
                  bit
                )}
                ${transition_color(scheme, result, index)}
                ${scheme === EncodingScheme.MANCHESTER || scheme === EncodingScheme.DIFFERENTIAL_MANCHESTER ? (bit === 3 ? "!border-b-4 border-b-red-500 border-r-4 border-r-red-500" : "") : ""}
                ${scheme === EncodingScheme.BIPOLAR_AMI || scheme === EncodingScheme.PSEUDOTERNARY ? (isInitiallyHigh === false && index === 0 && result[index] === 2 ? "border-l-4 border-l-red-500" : "") : ""}
                ${scheme === EncodingScheme.BIPOLAR_AMI || scheme === EncodingScheme.PSEUDOTERNARY ? (isInitiallyHigh && index === 0 && result[index] === 0 ? "border-l-4 border-l-red-500" : "") : ""}`}
              ></TableCell>
              <TableCell
                className={`w-24 h-16 border border-gray-300 relative ${bottom_color(
                  scheme,
                  bit
                )}
                ${scheme === EncodingScheme.MANCHESTER || scheme === EncodingScheme.DIFFERENTIAL_MANCHESTER ? (bit === 4 ? "!border-b-4 border-b-red-500 border-l-4 border-l-red-500" : "") : ""}
                ${scheme === EncodingScheme.BIPOLAR_AMI || scheme === EncodingScheme.PSEUDOTERNARY ? (result[index] === 2 && result[index + 1] === 0 ? "border-r-4 border-r-red-500" : "") : ""}
                ${scheme === EncodingScheme.BIPOLAR_AMI || scheme === EncodingScheme.PSEUDOTERNARY ? (result[index] === 0 && result[index + 1] === 2 ? "border-r-4 border-r-red-500" : "") : ""}
                ${scheme === EncodingScheme.BIPOLAR_AMI || scheme === EncodingScheme.PSEUDOTERNARY ? (result[index] === 0 && result[index + 1] === 1 ? "border-r-4 border-r-red-500" : "") : ""}
                ${scheme === EncodingScheme.BIPOLAR_AMI || scheme === EncodingScheme.PSEUDOTERNARY ? (result[index] === 1 && result[index + 1] === 0 ? "border-r-4 border-r-red-500" : "") : ""}
                ${scheme === EncodingScheme.BIPOLAR_AMI || scheme === EncodingScheme.PSEUDOTERNARY ? (result[index] === 0 && index + 1 === result.length ? "border-l-4 border-r-red-500" : "") : ""}`}
              ></TableCell>
            </React.Fragment>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableComponent;
