module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "script",
    },
    plugins: ["prettier"],
    rules: {
        eqeqeq: "warn",
        "prettier/prettier": [
            "warn",
            {
                tabWidth: 2,
                endOfLine: "crlf",
                "singleQuote": true,
            },
        ],
    },
};