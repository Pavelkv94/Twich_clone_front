import { z } from "zod";

export const enableTotpSchema = z.object({
    pin: z.string().min(6),
    secret: z.string().min(16),
});

export type EnableTotpSchema = z.infer<typeof enableTotpSchema>;

