module.exports = {
  overrides: [
    {
      files: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
      extends: 'standard-with-typescript',
      parserOptions: {
        "project": "./tsconfig.json"
      }
    }
  ],
}