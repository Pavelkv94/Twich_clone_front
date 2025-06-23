import { z } from "zod";

export const loginSchema = z.object({
    login: z.string().min(3).max(255),
    password: z.string().min(8),
    pin: z.string().optional(),
});

export type LoginSchema = z.infer<typeof loginSchema>;

