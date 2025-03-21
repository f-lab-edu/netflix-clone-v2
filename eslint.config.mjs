import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    env: {
      browser: true,
      es2021: true,
    },
    extends: ["next/core-web-vitals", "next/typescript"],
    plugins: ["@emotion"],
  }),
  {
    ignores: ["**/dist", "**/eslint.config.mjs"],
  },
  {
    rules: {
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import/order": [
        "error",
        {
          groups: [
            "type",
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "unknown",
          ],
          alphabetize: {
            order: "asc",
          },
        },
      ],
      "@typescript-eslint/no-explicit-any": ["off"],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
    },
  },
  {
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "space-before-blocks": ["error", "always"],
      "space-in-parens": ["error", "never"],
      "space-infix-ops": "error",
      indent: [
        "error",
        2,
        {
          SwitchCase: 1,
        },
      ],
      "padding-line-between-statements": [
        "error",
        { blankLine: "never", prev: "import", next: "import" },
      ],
      "object-curly-spacing": ["error", "always"],
      "lines-between-class-members": ["error", "always"],
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxEOF: 0,
          maxBOF: 0,
        },
      ],
      "key-spacing": [
        "error",
        {
          beforeColon: false,
          afterColon: true,
          mode: "strict",
        },
      ],
      "keyword-spacing": [
        "error",
        {
          before: true,
          after: true,
        },
      ],
      quotes: ["error", "single"],
      "no-extra-parens": "error",
      "no-unexpected-multiline": "error",
      "array-bracket-spacing": ["error", "never"],
      "block-spacing": ["error", "always"],
      "brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "comma-spacing": ["error", { before: false, after: true }],
      "func-call-spacing": ["error", "never"],
    },
  },
];

export default eslintConfig;
