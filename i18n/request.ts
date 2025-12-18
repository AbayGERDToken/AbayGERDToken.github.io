import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale: explicitLocale }) => {
  // Prefer the explicit `locale` when provided by the plugin (e.g. building /am)
  // Fall back to 'en' to keep static prerendering deterministic (don't read headers)
  const locale = explicitLocale || 'en';

  // Load the locale messages from the locales folder
  const messages = (await import(`../locales/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});
