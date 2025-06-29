import { z } from "zod";

export const changeEmailSchema = z.object({
    email: z.string().email(),
});

export type ChangeEmailSchema = z.infer<typeof changeEmailSchema>;

