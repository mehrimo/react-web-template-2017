const config = require('./config');
const webpackDev = require('./config/webpack/webpack.dev');
const webpackProd = require('./config/webpack/webpack.prod');

const {
  ENV,
  __DEV__,
  APP_NAME,
} = config;

process.noDeprecation = true;

console.log("——————————————————————————————");
console.log(`Building ${APP_NAME}`);
console.log("==============================");
console.log('environment :', ENV);
console.log("——————————————————————————————");

module.exports = (
  __DEV__
    ? webpackDev
    : webpackProd
);