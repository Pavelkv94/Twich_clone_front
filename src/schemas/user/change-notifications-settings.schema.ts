import { languages } from "@/libs/i18n/config";
import { z } from "zod";

export const changeNotificationsSettingsSchema = z.object({
    siteNotifications: z.boolean(),
    telegramNotifications: z.boolean(),
});

export type ChangeNotificationsSettingsSchema = z.infer<typeof changeNotificationsSettingsSchema>;

