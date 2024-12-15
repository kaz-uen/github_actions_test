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
};
