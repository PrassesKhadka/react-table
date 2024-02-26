import { z } from "zod";
import { personalInformationSchema } from "./personalInformation";
import { additionalFormSchema } from "./additionalInformation";

const FORM_TYPE = ["personalInformation", "additionalInformation"] as const;
const formEnum = z.enum(FORM_TYPE);

export const registrationFormSchema = z.discriminatedUnion("formType", [
  z.object({
    formType: z.literal(formEnum.enum.personalInformation),
    personalInformation: personalInformationSchema,
  }),
  z.object({
    formType: z.literal(formEnum.enum.additionalInformation),
    additionalInformation: additionalFormSchema,
  }),
]);

export type TregistrationFormSchema = z.infer<typeof registrationFormSchema>;
