export type LocaleCode = 'en' | 'ja' | 'zh-TW' | 'ca';

export type LocalizedFields<T> = Partial<Record<LocaleCode, Partial<T>>>;

export type LocalizedContentSection = {
  title?: string;
  body?: string;
};

export type LocalizedContentLink = {
  label?: string;
  note?: string;
};

export type LocalizedChangelogEntry = {
  title?: string;
  body?: string;
};
