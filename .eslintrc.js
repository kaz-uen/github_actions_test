module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true  // nodeの環境を追加
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  settings: {
    react: {
      version: 'detect'  // Reactのバージョンを自動検出
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off'  // React 17以降では不要なので無効化
  }
};
