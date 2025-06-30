import { z } from "zod";


export const createPlanSchema = z.object({
    title: z.string().max(255),
    description: z.string().optional(),
    price: z.number().min(0, { message: "Price must be greater than 0" }),
});

export type CreatePlanSchema = z.infer<typeof createPlanSchema>;

