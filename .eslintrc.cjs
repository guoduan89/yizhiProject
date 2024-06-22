/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-empty': 'warn',
    'no-empty-pattern': 'warn',
    'no-case-declarations': 'off',
    'vue/multi-word-component-names': 'off',
    'prefer-template': 'error',
    'no-unused-vars': 'warn',
    indent: 'off',
    'vue/no-unused-vars': 'warn',
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'import/no-unresolved': 'off'
  }
}
