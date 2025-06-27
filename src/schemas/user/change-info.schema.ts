import { z } from "zod";

export const changeInfoSchema = z.object({
    username: z.string().min(3).max(20).regex(/^[a-zA-Z0-9]+$/),
    displayName: z.string().min(3).max(20),
    bio: z.string().min(0).max(300),
});

export type ChangeInfoSchema = z.infer<typeof changeInfoSchema>;

