module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "jest"],
  rules: {
    "prettier/prettier": ["error", { singleQuote: false }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/forbid-prop-types": [0, { forbid: ["any"] }],
    "react/prop-types": 0,
    "no-plusplus": "off",
    "global-require": 0,
    "no-underscore-dangle": "off",
    quotes: [2, "double"],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx"],
      },
    },
  },
};
