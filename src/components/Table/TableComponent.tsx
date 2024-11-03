import { Table, TableCell, TableRow, TableBody } from "@/components/ui/table";
import { SignalLevel } from "@/types/signalLevel";
import React from "react";

const TableComponent = ({ result }: { result: SignalLevel[] }) => {
  return (
    <Table className="table-fixed border-collapse">
      <TableBody>
        <TableRow>
          {[...result].map((bit, index) => (
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
          {[...result].map((_, index) => (
            <React.Fragment key={`row1-${index}`}>
              <TableCell className="w-24 h-16 border border-gray-300 relative text-center"></TableCell>
              <TableCell className="w-24 h-16 border border-gray-300 relative text-center"></TableCell>
            </React.Fragment>
          ))}
        </TableRow>
        <TableRow>
          {[...result].map((_, index) => (
            <React.Fragment key={`row2-${index}`}>
              <TableCell className="w-24 h-16 border border-gray-300 relative text-center"></TableCell>
              <TableCell className="w-24 h-16 border border-gray-300 relative text-center"></TableCell>
            </React.Fragment>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableComponent;
