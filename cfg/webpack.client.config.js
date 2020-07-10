const path = require('path');

function setupDevtool() {
    if (IS_DEV) return 'eval';
    if (IS_PROD) return false;
}

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV == "development";
const IS_PROD = NODE_ENV == "production";

module.exports = {
    mode: NODE_ENV ? NODE_ENV : 'development',
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },

    entry: path.resolve(__dirname, '../src/client/index.jsx'),
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js'
    },
    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use: ['ts-loader']
        }]
    },
    devtool: setupDevtool()
};
1