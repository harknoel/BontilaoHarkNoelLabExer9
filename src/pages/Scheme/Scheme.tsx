import SelectComponent from "@/components/Select";
import { LineCoding } from "@/utils/lineCoding";
import { useEffect, useState } from "react";

const Scheme = () => {
  const [selectedEncoding, setSelectedEncoding] = useState<string>("");

  useEffect(() => {
    console.log(selectedEncoding);
    // let input = [0, 1, 0, 0, 1, 1, 1, 0];
    // const result = LineCoding.convert(selectedEncoding, input);
    // console.log(result);
  }, [selectedEncoding]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl"></div>
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
