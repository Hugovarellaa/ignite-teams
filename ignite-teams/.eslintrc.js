module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "prettier",
    "prettier/react",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".ts", ".tsx"],
      },
    ],
    "import/prefer-default-export": "off",
    "react/state-in-constructor": "off",
    "react/static-property-placement": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "no-param-reassign": "off",
    "no-console": "off",
  },
};
