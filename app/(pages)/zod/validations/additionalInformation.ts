import { z } from "zod";

const INTEREST = ["Football", "Cricket", "Gaming", "Basketball"] as const;

export const additionalFormSchema = z.object({
  id: z.string().startsWith("#").uuid(),
  email: z.string().email(),
  url: z.string().url(),
  interests: z.enum(INTEREST),
  gender: z.enum(["male", "female"]),
});

export type TadditionalFormSchema = z.infer<typeof additionalFormSchema>;
