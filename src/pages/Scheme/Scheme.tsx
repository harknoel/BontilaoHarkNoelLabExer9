import { EncodingScheme } from "@/types/encodingScheme";

const Scheme = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl"></div>
      <div className="p-10">
        <select>
          <option value={EncodingScheme.NRZ_L}>NRZ - L</option>
          <option value={EncodingScheme.NRZ_I}>NRZ - I</option>
          <option value={EncodingScheme.BIPOLAR_AMI}>Bipolar - AMI</option>
          <option value={EncodingScheme.PSEUDOTERNARY}>Pseudoternary</option>
          <option value={EncodingScheme.MANCHESTER}>Manchester</option>
          <option value={EncodingScheme.DIFFERENTIAL_MANCHESTER}>
            Differential Manchester
          </option>
        </select>
      </div>
    </div>
  );
};

export default Scheme;
