// This is my zod playground
import React from "react";
import { z } from "zod";
import { PersonalInformation } from "./components/Forms/PersonalInformation/PersonalInformation";

// Creating a schema for strings
const mySchema = z.string();

// parsing
mySchema.parse("tuna");
// mySchema.parse(12); // Throws error

const Zod = () => {
  return (
    <>
      <h1>
        This is a zod playground {"->"} Zod + TypeScript + React hook forms
      </h1>
      <PersonalInformation />
    </>
  );
};

export default Zod;
