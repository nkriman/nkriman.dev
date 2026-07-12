import { defineConfig } from 'astro/config';

// Custom Shiki theme per the design system: fenced code renders on ink with
// cyan keywords and muted comments — no other colors.
const inkTheme = {
  name: 'nk-ink',
  type: 'dark',
  colors: {
    'editor.background': '#0B1115',
    'editor.foreground': '#F4F7F8',
  },
  settings: [
    { settings: { foreground: '#F4F7F8', background: '#0B1115' } },
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#586872' } },
    {
      scope: ['keyword', 'storage.type', 'storage.modifier', 'keyword.control'],
      settings: { foreground: '#15C0D6' },
    },
    { scope: ['string', 'string.quoted'], settings: { foreground: '#9DAAB2' } },
  ],
};

export default defineConfig({
  site: 'https://nkriman.com',
  markdown: {
    shikiConfig: { theme: inkTheme },
  },
});
