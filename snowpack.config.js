/* eslint-env node */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
const commonjs = require("rollup-plugin-commonjs");
const typescript = require("rollup-plugin-typescript");
const vue = require("rollup-plugin-vue");
const resolve = require("rollup-plugin-node-resolve");

module.exports = {
    rollup: {
        sourceMap: true,
        // Top to Bottom
        plugins: [
            resolve({
                jsnext: true,
                main: true,
                browser: true
            }),
            commonjs(),
            typescript(),
            vue()
        ]
    }
}