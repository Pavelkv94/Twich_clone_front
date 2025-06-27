import { z } from "zod";

export const socialLinksSchema = z.object({
    title: z.string().min(3).max(20),
    url: z.string().url(),
});

export type SocialLinksSchema = z.infer<typeof socialLinksSchema>;

