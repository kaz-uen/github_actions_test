module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:node/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'node'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'node/no-unpublished-require': 'off',
    'node/no-unsupported-features/es-syntax': ['error', {
      version: '>=14.0.0',
      ignores: ['modules']
    }],
    'no-console': ['error', { allow: ['warn', 'error'] }]
  },
  overrides: [
    {
      files: ['src/**/*.js', 'src/**/*.jsx'],
      rules: {
        'node/no-unsupported-features/es-syntax': 'off'
      }
    }
  ]
};
