const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.baseconfig');

const devConfig = {
    mode: "development"
};
module.exports = merge(baseConfig, devConfig);