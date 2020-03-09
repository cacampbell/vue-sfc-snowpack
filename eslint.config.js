module.exports = {
    "root": true,
    "extends": [
        "plugin:vue/essential",
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript"
    ],
    "plugins": [
        "vue",
        "import" 
     ],
    "rules": {
        "import/default": "off",
        "import/order": [
            "error",
            {
                "groups": [
                    "builtin",
                    "external",
                    "parent",
                    "sibling",
                    "index"
                ],
                "alphabetize": {
                    "order": "asc"
                },
                "newlines-between": "always"
            }
        ]
    }
}
