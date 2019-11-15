module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:prettier/recommended"
    ],
    "plugins": [
        "vue",
        "prettier",
        "@typescript-eslint"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "parser": "@typescript-eslint/parser",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "prettier/prettier": "error",
        "semi": ["error","never"],
        "quotes": ["error","single"],
        "no-unused-vars": 0
    }
}