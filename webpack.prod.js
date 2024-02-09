const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.baseconfig');

const prodConfig = {
    mode: "production"
};
module.exports = merge(baseConfig, prodConfig);