import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EncodingScheme } from "@/types/EncodingScheme";

const SelectComponent = ({
  selectedEncoding,
  setSelectedEncoding,
}: {
  selectedEncoding: string;
  setSelectedEncoding: (value: string) => void;
}) => {
  return (
    <Select value={selectedEncoding} onValueChange={setSelectedEncoding}>
      <SelectTrigger className="w-[240px]">
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
          <SelectItem value={EncodingScheme.MANCHESTER}>Manchester</SelectItem>
          <SelectItem value={EncodingScheme.DIFFERENTIAL_MANCHESTER}>
            Differential Manchester
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
