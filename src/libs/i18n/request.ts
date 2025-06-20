import { getRequestConfig } from "next-intl/server";
import { getCurrentLanguage } from "./language";

export default getRequestConfig(async () => {
    const language = await getCurrentLanguage();
    return {
        locale: language,
        messages: (await import(`../../../public/locales/${language}.json`)).default,
    }
})