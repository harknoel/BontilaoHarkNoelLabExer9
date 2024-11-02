import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const Scheme = () => {
  const binarySequence = "01001110";

  // Helper to determine if a transition occurs between bits
  const hasTransition = (index: number) => {
    if (index === 0) return false;
    return binarySequence[index] !== binarySequence[index - 1];
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="max-w-4xl">
        <Table className="table-fixed border-collapse">
          <TableBody>
            {/* Top row */}
            <TableRow>
              {[...binarySequence].map((bit, index) => (
                <TableCell
                  key={`top-${index}`}
                  className={`w-24 h-16 border border-gray-300 relative
                  ${bit === "1" ? "border-t-4 border-t-red-500" : ""}
                  ${
                    hasTransition(index) == true
                      ? "border-l-4 border-l-red-500"
                      : ""
                  }`}
                ></TableCell>
              ))}
            </TableRow>

            {/* Bottom row */}
            <TableRow>
              {[...binarySequence].map((bit, index) => (
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
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Scheme;
