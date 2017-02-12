// allows require modules relative to /src folder
// for example: require('lib/mongo/idGenerator')
// all options can be found here: https://gist.github.com/branneman/8048520
require('app-module-path').addPath(__dirname);
const config = require('./config');

const app = require('koa')();
require('./config/koa')(app);

app.listen(config.port, null, () => {
  console.log(`Api is listening on ${config.port}, in ${config.env} mode`);
});

module.exports = app;
