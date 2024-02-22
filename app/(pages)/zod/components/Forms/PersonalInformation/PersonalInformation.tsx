import { Controller, useForm, useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { RegistrationFormSchemaProps } from "../../../validations/registrationForm";

export function PersonalInformation() {
  const {
    control,
    formState: { errors },
  } = useFormContext<RegistrationFormSchemaProps>();

  return (
    <fieldset>
      <legend>Personal Information</legend>
      <Controller
        name="personalInformation.firstName"
        defaultValue={""}
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            type="text"
            aria-label="First name"
            aria-errormessage="errors?.personalInformation.firstName.message"
          />
        )}
      />
    </fieldset>
  );
}
