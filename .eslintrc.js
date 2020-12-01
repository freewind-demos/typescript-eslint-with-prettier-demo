/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint/eslint-plugin"],
  "env": {
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      4
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ]
  }
}
