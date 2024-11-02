import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EncodingScheme } from "@/types/encodingScheme";

const Scheme = () => {
  const binarySequence = "01001110";

  const hasTransition = (index: number) => {
    if (index === 0) return false;
    return binarySequence[index] !== binarySequence[index - 1];
  };

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
                  ${bit === "1" ? "border-t-4 border-t-red-500" : ""}
                  ${hasTransition(index) == true ? "border-l-4 border-l-red-500" : ""}  `}
                  ></TableCell>
                  <TableCell
                    key={`top-${index}`}
                    className={`w-24 h-16 border border-gray-300 relative
                  ${bit === "1" ? "border-t-4 border-t-red-500" : ""} `}
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
                  ${bit === "0" ? "border-b-4 border-b-red-500" : ""}
                  ${
                    hasTransition(index) == true
                      ? "border-l-4 border-l-red-500"
                      : ""
                  }`}
                  >
                    <div className="absolute bottom-2 left-0 right-0 text-center">
                      {bit}
                    </div>
                  </TableCell>
                  <TableCell
                    key={`bottom-${index}`}
                    className={`w-24 h-16 border border-gray-300 relative
                  ${bit === "0" ? "border-b-4 border-b-red-500" : ""}
                  `}
                  >
                  </TableCell>
                </>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="p-10">
        <Select>
          <SelectTrigger className="w-[230px]">
            <SelectValue placeholder="Select an encoding technique" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Encoding techniques</SelectLabel>
              <SelectItem value={EncodingScheme.NRZ_L.toString()}>
                NRZ - L
              </SelectItem>
              <SelectItem value={EncodingScheme.NRZ_I.toString()}>
                NRZ - I
              </SelectItem>
              <SelectItem value={EncodingScheme.BIPOLAR_AMI.toString()}>
                Bipolar - AMI
              </SelectItem>
              <SelectItem value={EncodingScheme.PSEUDOTERNARY.toString()}>
                Pseudoternary
              </SelectItem>
              <SelectItem value={EncodingScheme.MANCHESTER.toString()}>
                Manchester
              </SelectItem>
              <SelectItem
                value={EncodingScheme.DIFFERENTIAL_MANCHESTER.toString()}
              >
                Differential Manchester
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Scheme;
