module.exports = {
  bracketSpacing: true,
  tabWidth: 4,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  arrowParens: 'always',
  overrides: [
    {
      files: '*.{tsx,ts,json}',
      options: {
        tabWidth: 4,
      },
    },
  ],
};
