import { z } from "zod";

export const resetPasswordSchema = z.object({
    email: z.string().email().min(3).max(255)
});

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;