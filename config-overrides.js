const path = require('path');
const { override, babelInclude } = require('customize-cra');

module.exports = override(
  babelInclude([
    path.resolve('src'), // 确保要包含自己的项目
    path.resolve('./packages'), //引入报错的项目
  ]),
);
