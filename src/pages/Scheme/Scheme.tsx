import { useEffect, useState } from "react";
import SelectComponent from "@/components/Select";
import TableComponent from "@/components/Table";
import { LineCoding } from "@/utils/LineCoding";
import { SignalLevel } from "@/types/SignalLevel";

const Scheme = () => {
  let input = [0, 1, 0, 0, 1, 1, 1, 0];
  const [selectedEncoding, setSelectedEncoding] = useState<string>("");
  const [result, setResult] = useState<SignalLevel[]>([]);

  useEffect(() => {
    const output = LineCoding.convert(selectedEncoding, input);
    setResult(output);
    console.log(result);
  }, [selectedEncoding]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl">
        <TableComponent result={result}></TableComponent>
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
