// Creating a Debounced input,
// this way the filter won't be triggered at every key stroke of the input

import React, { useState, useEffect } from "react";

// will have all the attribute of HTMLInputElement like className,placeholder,type="text",etc
// except onChange since we will be passing onChange attribute to the input element explicitly

interface DebouncedInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string | number;
  onChange: (val: string | number) => void;
  debounceTime?: number;
}

const DebouncedInput: React.FC<DebouncedInputProps> = ({
  value: initialValue,
  onChange,
  debounceTime = 300,
  ...props
}: DebouncedInputProps) => {
  const [value, setValue] = useState<string | number>(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounceTime);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, onChange, debounceTime]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default DebouncedInput;
