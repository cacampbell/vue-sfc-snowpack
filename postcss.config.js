/* eslint-env node */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
    plugins: [
        require("postcss-normalize")(),
        require("postcss-preset-env")({ stage: 0 })
    ]
};
