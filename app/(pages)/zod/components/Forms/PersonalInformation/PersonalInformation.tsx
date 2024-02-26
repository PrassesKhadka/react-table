"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  registrationFormSchema,
  type TregistrationFormSchema,
} from "../../../validations/registrationForm";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PersonalInformation = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TregistrationFormSchema>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      formType: "personalInformation",
      personalInformation: {
        firstName: "",
        lastName: "",
        phone: "",
      },
    },
  });

  function submitHandler(values: TregistrationFormSchema) {
    alert(values);
  }

  return (
    <>
      <div className="w-[40%]">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col gap-2"
        >
          <div className="md:flex md:justify-between">
            <div className="flex flex-col gap-2">
              <label>First Name</label>
              <Controller
                control={control}
                name="personalInformation.firstName"
                render={({ field }) => <Input type="text" {...field} />}
              />
              <p className="text-red-500">{errors.formType?.message}</p>
            </div>
            <div className="flex flex-col gap-2">
              <label>Last Name</label>
              <Controller
                control={control}
                name="personalInformation.lastName"
                render={({ field }) => <Input type="text" {...field} />}
              />
              {}
            </div>
          </div>
          <label>Bio</label>
          <Controller
            control={control}
            name="personalInformation.phone"
            render={({ field }) => <Input type="text" {...field} />}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </>
  );
};

export default PersonalInformation;
