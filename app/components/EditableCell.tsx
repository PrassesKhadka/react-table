import React, { useState, useEffect } from "react";

type TEditableCellProps = {
  getValue: () => string;
};

const EditableCell: React.FC<TEditableCellProps> = ({ getValue }) => {
  const initialValue = getValue();
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
    </>
  );
};

export default EditableCell;
