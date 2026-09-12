// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const stylistic = require('@stylistic/eslint-plugin');

module.exports = defineConfig([
  expoConfig,
  {
    plugins: { '@stylistic': stylistic },
    rules: {
      '@stylistic/quotes': ['error', 'single'], // 'texto'
      '@stylistic/jsx-quotes': ['error', 'prefer-double'], // <Text testID="x">
      '@stylistic/semi': ['error', 'always'], // ponto e vírgula no fim
      '@stylistic/indent': ['error', 2], // 2 espaços
      '@stylistic/comma-dangle': ['error', 'always-multiline'], // vírgula no último item de listas com várias linhas
      '@stylistic/object-curly-spacing': ['error', 'always'], // { nome } em vez de {nome}
      '@stylistic/arrow-parens': ['error', 'always'], // (x) => em vez de x =>
      '@stylistic/max-len': ['warn', { code: 100, ignoreUrls: true }], // só avisa linhas com mais de 100 caracteres
    },
  },
  {
    ignores: ['dist/*'],
  },
]);
