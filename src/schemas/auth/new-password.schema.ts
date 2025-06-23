import { z } from "zod";

export const newPasswordSchema = z.object({
    password: z.string().min(8),
    passwordRepeat: z.string().min(8),
}).refine((data) => data.password === data.passwordRepeat, {
    path: ["passwordRepeat"],
});

export type NewPasswordSchema = z.infer<typeof newPasswordSchema>;