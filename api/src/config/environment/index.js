const _ = require('lodash');
const path = require('path');

const env = process.env.NODE_ENV || 'development';

let base = {
  env,
  port: 8081,
};

const envConfig = require(`./${env}.js`);
base = _.merge(base, envConfig || {});

module.exports = base;
