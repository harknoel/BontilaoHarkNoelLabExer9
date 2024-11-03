import { EncodingScheme } from "@/types/encodingScheme";
import { LineCoding } from "@/utils/lineCoding";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

const Scheme = () => {
  const [selectedEncoding, setSelectedEncoding] = useState<string>("");

  const handleOnChanged = (e: any) => {
    setSelectedEncoding(e.target.value);
  };

  useEffect(() => {
    console.log(selectedEncoding);
    let input = [1, 1]
    const result = LineCoding.convert(selectedEncoding, input);
    console.log(result)

  }, [selectedEncoding]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl"></div>
      <div className="p-10">
        <Select value={selectedEncoding} onValueChange={setSelectedEncoding}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select an encoding technique" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Encoding Techniques</SelectLabel>
              <SelectItem value={EncodingScheme.NRZ_L}>NRZ - L</SelectItem>
              <SelectItem value={EncodingScheme.NRZ_I}>NRZ - I</SelectItem>
              <SelectItem value={EncodingScheme.BIPOLAR_AMI}>
                Bipolar - AMI
              </SelectItem>
              <SelectItem value={EncodingScheme.PSEUDOTERNARY}>
                Pseudoternary
              </SelectItem>
              <SelectItem value={EncodingScheme.MANCHESTER}>
                Manchester
              </SelectItem>
              <SelectItem value={EncodingScheme.DIFFERENTIAL_MANCHESTER}>
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
