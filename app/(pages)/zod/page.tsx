// This is my zod playground
import React from "react";
import { z } from "zod";
import PersonalInformation from "./components/Forms/PersonalInformation/PersonalInformation";

// // Creating a schema for strings
// const mySchema = z.string();

// // parsing
// mySchema.parse("tuna");
// // mySchema.parse(12); // Throws error

const Zod = () => {
  return (
    <>
      <h1>
        This is a zod playground {"->"} Zod + TypeScript + React hook forms
      </h1>
      <div className="w-full bg-green-200 h-[75vh] flex justify-center items-center">
        <PersonalInformation />
      </div>
    </>
  );
};

export default Zod;
