module.exports = {
  extends: "@cybozu/eslint-config/presets/node-prettier",
  env: {
    mocha: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015,
  },
  rules: {
    "prettier/prettier": "off"  // Prettierのルールを一時的に無効化
  }
};
