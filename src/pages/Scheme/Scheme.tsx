import { useEffect, useState } from "react";
import SelectComponent from "@/components/Select";
import TableComponent from "@/components/Table";
import { LineCoding } from "@/utils/LineCoding";
import { SignalLevel } from "@/types/SignalLevel";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { EncodingScheme } from "@/types/EncodingScheme";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Scheme = () => {
  const [inputString, setInputString] = useState("");
  const [inputArray, setInputArray] = useState<number[]>([
    0, 1, 0, 0, 1, 1, 1, 0,
  ]);
  const [selectedEncoding, setSelectedEncoding] = useState<string>(
    EncodingScheme.NRZ_L
  );
  const [result, setResult] = useState<SignalLevel[]>([]);
  const [error, setError] = useState<string>("");
  const [isInitiallyHigh, setIsInitiallyHigh] = useState(false);

  useEffect(() => {
    isInitiallyHigh === false
      ? (LineCoding._state = SignalLevel.LOW)
      : (LineCoding._state = SignalLevel.HIGH);

    const output = LineCoding.convert(selectedEncoding, inputArray);
    setResult(output);
  }, [selectedEncoding, isInitiallyHigh, inputArray]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value && !/^[01]+$/.test(value)) {
      setError("Please enter only binary digits (0s and 1s)");
      return;
    }
    setInputString(value);
    setError("");
    if (!value) {
      setInputArray([0, 1, 0, 0, 1, 1, 1, 0, 1]);
      return;
    }
    const numbers = Array.from(value).map((digit) => parseInt(digit));
    setInputArray(numbers);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Line Coding Scheme Converter</CardTitle>
            <CardDescription>
              Convert binary sequences into different line coding schemes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="binary-input" className="text-sm font-medium">
                  Binary Input
                </label>
                <Input
                  id="binary-input"
                  placeholder="Enter binary sequence (e.g., 1 0 1 1 0)"
                  value={inputString}
                  onChange={handleInputChange}
                  className={error ? "border-red-500" : ""}
                />
                <p className="text-sm text-slate-500">
                  Current sequence: {inputArray.join(" ")}
                </p>
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
              </div>

              <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Encoding Scheme</label>
                  <SelectComponent
                    selectedEncoding={selectedEncoding}
                    setSelectedEncoding={setSelectedEncoding}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="initial-level"
                    checked={isInitiallyHigh}
                    onCheckedChange={setIsInitiallyHigh}
                  />
                  <Label
                    htmlFor="initial-level"
                    className="text-sm font-medium"
                  >
                    Initially {isInitiallyHigh ? "High" : "Low"}
                  </Label>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <TableComponent
                scheme={selectedEncoding}
                input={inputArray}
                result={result}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Scheme;
