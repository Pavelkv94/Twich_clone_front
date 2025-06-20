export const COOKIE_NAME = "language";

export const languages = ['ru', 'en'] as const;

export type Language = (typeof languages)[number];

export const defaultLanguage: Language = 'en';
