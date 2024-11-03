import SelectComponent from "@/components/Select";
import { useEffect, useState } from "react";
import { Table, TableCell, TableRow, TableBody } from "@/components/ui/table";
import { LineCoding } from "@/utils/lineCoding";

const Scheme = () => {
  let input = [0, 1, 0, 0, 1, 1, 1, 0];
  const [selectedEncoding, setSelectedEncoding] = useState<string>("");

  useEffect(() => {
    console.log(selectedEncoding);
    const result = LineCoding.convert(selectedEncoding, input);
    console.log(result);
  }, [selectedEncoding]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl">
        <Table className="table-fixed border-collapse">
          <TableBody>
            <TableRow>
              {[...input].map((bit, index) => (
                <TableCell
                  colSpan={2}
                  key={`top-${index}`}
                  className="w-24 h-16 border border-gray-300 relative text-center"
                >
                  {bit}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="p-10">
        <SelectComponent
          selectedEncoding={selectedEncoding}
          setSelectedEncoding={setSelectedEncoding}
        ></SelectComponent>
      </div>
    </div>
  );
};

export default Scheme;
