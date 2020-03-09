module.exports = {
    "comments": false,
    // Apply Bottom to Top
    "presets": [
        "@vue/app",
        "vca-jsx",
        "@vue/babel-preset-jsx",
        "@babel/preset-typescript"
    ],
    // Apply Top to Bottom
    "plugins": [
        "add-import-extension",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-syntax-jsx",
        "transform-vue-jsx",
        ["snowpack/assets/babel-plugin.js", {
            "optionalExtensions": true
        }],
    ]
}