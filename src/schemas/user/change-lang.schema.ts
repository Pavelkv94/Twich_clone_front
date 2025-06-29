import { languages } from "@/libs/i18n/config";
import { z } from "zod";

export const changeLangSchema = z.object({
    language: z.enum(languages),
});

export type ChangeLangSchema = z.infer<typeof changeLangSchema>;

