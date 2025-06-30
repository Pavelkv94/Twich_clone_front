import { z } from "zod";

export enum IngressType {
    RTMP = 0,
    WHIP = 1,
}

export const createIngressSchema = z.object({
    ingressType: z.nativeEnum(IngressType),
});

export type CreateIngressSchema = z.infer<typeof createIngressSchema>;

