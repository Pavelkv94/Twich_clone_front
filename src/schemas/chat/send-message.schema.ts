import { z } from "zod";


export const sendMessageSchema = z.object({
    text: z.string().min(1),
    streamId: z.string()
});

export type SendMessageSchema = z.infer<typeof sendMessageSchema>;

