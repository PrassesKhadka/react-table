// Creating a Debounced input, this way the filter won't be triggered at every key stroke of the input

import React, { useState, useEffect } from "react";

type DebouncedInputProps = {
  value: string | number;
  onChange: (val: string | number) => void;
  debounceTime?: number;
};

const DebouncedInput: React.FC<DebouncedInputProps> = ({
  value: initialValue,
  onChange,
  debounceTime = 300,
  ...props
}) => {
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
