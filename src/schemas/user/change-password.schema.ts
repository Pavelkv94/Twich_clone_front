import { z } from "zod";

export const changePasswordSchema = z.object({
    password: z.string().min(8),
    newPassword: z.string().min(8),
});

export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;

