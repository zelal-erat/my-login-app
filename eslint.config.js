import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import cypress from 'eslint-plugin-cypress'

export default [
  // Genel yapılandırma
  {
    ignores: ['dist'], // dist klasörünü yoksay
    files: ['**/*.{js,jsx}'], // js ve jsx dosyaları için genel kurallar
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser, // Tarayıcıda bulunan global değişkenler
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    }
    },
    settings:{ react: { version: '18.3' } }, // React sürümü
    plugins:{
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      cypress, // Cypress plugin'ini burada kullanıyoruz
    },
    rules:{
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
    }
  ]
