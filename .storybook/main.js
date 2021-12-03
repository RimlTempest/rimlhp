// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials"
//   ],
//   "framework": "@storybook/react"
// }

const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-toolbars',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-actions',
    ],
    typescript: {
        reactDocgen: false,
    },
    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, '../src'),
        };
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    '@emotion/core': toPath('node_modules/@emotion/react'),
                    'emotion-theming': toPath('node_modules/@emotion/react'),
                },
            },
        };
    },
};
