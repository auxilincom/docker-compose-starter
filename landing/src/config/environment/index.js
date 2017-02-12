const _ = require('lodash');
const path = require('path');
const fs = require('fs');

const env = process.env.NODE_ENV || 'development';

let base = {
  env,
  isDev: env === 'development',
};

base = _.merge(base, require(`./${env}.js`) || {}); // eslint-disable-line global-require

module.exports = base;
