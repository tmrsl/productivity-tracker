module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
    },
    presets: ["@babel/preset-react"],
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["import"],
  root: true,
  rules: {
    // "comma-dangle": ["warn", "always-multiline"],
    "eol-last": "error",
    "import/order": [
      "warn",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        groups: [
          "builtin",
          "external",
          "index",
          "sibling",
          "parent",
          "internal",
        ],
      },
    ],
    // indent: ["error", 2],
    "jsx-quotes": ["warn", "prefer-double"],
    "max-len": [
      "warn",
      {
        code: 120,
      },
    ],
    "no-duplicate-imports": "warn",
    "no-unused-vars": "warn",
    "object-curly-spacing": ["warn", "always"],
    quotes: ["warn", "double"],
    "react/jsx-curly-spacing": [
      "warn",
      {
        allowMultiline: true,
        children: {
          when: "never",
        },
        spacing: {
          objectLiterals: "never",
        },
        when: "never",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      "off",
      {
        extensions: [".js", ".tsx"],
      },
    ],
    "react/jsx-indent": [
      "error",
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions: true,
      },
    ],
    "react/jsx-indent-props": ["error", 2],
    "react/prop-types": "off",
    semi: "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
