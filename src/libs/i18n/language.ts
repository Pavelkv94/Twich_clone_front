'use server';

import { cookies } from 'next/headers';
import { COOKIE_NAME, defaultLanguage, Language } from './config';


//language from cookie
export async function getCurrentLanguage() {
    const cookieStore = await cookies();
    const language = cookieStore.get(COOKIE_NAME)?.value;
    return language || defaultLanguage;
}

export async function setLanguage(language: Language) {
    const cookieStore = await cookies();
    return cookieStore.set(COOKIE_NAME, language);
}