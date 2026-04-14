// @ts-check
import eslint from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"

export default tseslint.config(
    {
        ignores: [
            "dist/**",
            "node_modules/**",
            "web/**",
            "coverage/**",
            "eslint.config.*",
            "src/database/database.js",
            "src/database/db.js",
        ],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
            ecmaVersion: 2022,
            sourceType: "module",
            parserOptions: {
                project: true,
            },
        },
        rules: {
            // Merged TS rules - frontend strict + backend compat
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                },
            ],
            "@typescript-eslint/no-empty-object-type": "warn",
            "@typescript-eslint/ban-ts-comment": "warn",
            "@typescript-eslint/no-unsafe-member-access": "warn",
            "@typescript-eslint/no-unsafe-assignment": "warn",
            "@typescript-eslint/no-unsafe-call": "warn",
            "@typescript-eslint/no-unsafe-argument": "warn",
            "@typescript-eslint/no-unsafe-return": "warn",
            "@typescript-eslint/no-floating-promises": "warn",
            "@typescript-eslint/explicit-function-return-type": "warn",
            "@typescript-eslint/no-unnecessary-type-assertion": "warn",

            // Best practices
            "no-console": "warn",
            "no-debugger": "error",
            "prefer-const": "error",
            "no-implicit-coercion": "error",
            "no-unused-expressions": "error",
            "no-useless-return": "error",
            "require-await": "error",
            "no-shadow": "warn",
            "no-empty": "warn",

            // Style & Complexity
            "array-callback-return": "error",
            complexity: ["warn", 10],
            "consistent-return": "warn",
            curly: "error",
            "default-case": "warn",
            "default-case-last": "error",
            "default-param-last": "error",
            "dot-notation": "error",
            eqeqeq: "error",
            "guard-for-in": "error",

            // ES6+
            "arrow-body-style": ["error", "as-needed"],
            "arrow-parens": ["error", "always"],
            "arrow-spacing": "error",
            "no-useless-computed-key": "error",
            "no-useless-constructor": "error",
            "object-shorthand": "error",
            "prefer-arrow-callback": "error",
            "prefer-destructuring": "warn",
            "prefer-rest-params": "error",
            "prefer-spread": "error",
            "prefer-template": "error",

            // Prettier
            semi: "warn",
            quotes: "warn",
            indent: "warn",
            "comma-dangle": "warn",
        },
    },
)
