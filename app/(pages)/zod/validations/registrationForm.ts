import { z } from "zod";
import {
  personalInformationSchema,
  type PersonalInformationFormSchemaProps,
} from "./personalInformation";

export interface IregistrationFormData {
  formType: string;
  personalInformation: {
    firstName: string;
    lastName: string;
    phone: string;
  };
}
export enum RegistrationFormTypeEnum {
  PersonalInformation = "personalInformation",
}

// discriminatedUnion -> same as z.union() but here only objects are permissible to pass,i.e union of objects
// Also all objects need to share the same discriminator property but the value(discriminator)
// for each object should be different
export const registrationFormSchema = z.discriminatedUnion("formType", [
  z.object({
    formType: z.literal(RegistrationFormTypeEnum.PersonalInformation),
    personalInformation: personalInformationSchema,
  }),
]);

export type RegistrationFormSchemaProps = {
  formType: RegistrationFormTypeEnum;
  personalInformation: PersonalInformationFormSchemaProps;
};
