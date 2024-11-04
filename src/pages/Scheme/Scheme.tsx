import { useEffect, useState } from "react";
import SelectComponent from "@/components/Select";
import TableComponent from "@/components/Table";
import { LineCoding } from "@/utils/LineCoding";
import { SignalLevel } from "@/types/SignalLevel";
import { Input } from "@/components/ui/input";
import { EncodingScheme } from "@/types/EncodingScheme";

const Scheme = () => {
  let input = [0, 1, 0, 0, 1, 1, 1, 0, 1];
  const [selectedEncoding, setSelectedEncoding] = useState<string>(EncodingScheme.NRZ_L);
  const [result, setResult] = useState<SignalLevel[]>([]);

  useEffect(() => {
    const output = LineCoding.convert(selectedEncoding, input);
    setResult(output);
  }, [selectedEncoding]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl">
        <Input type="email" placeholder="Input" className="w-[200px] mb-10"/>
        <TableComponent
          scheme={selectedEncoding}
          input={input}
          result={result}
        ></TableComponent>
      </div>
      <div className="m-10">
        <SelectComponent
          selectedEncoding={selectedEncoding}
          setSelectedEncoding={setSelectedEncoding}
        ></SelectComponent>
      </div>
    </div>
  );
};

export default Scheme;
