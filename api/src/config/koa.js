const bodyParser = require('koa-bodyparser');
const logger = global.logger;

module.exports = function configureKoa(app) {
  app.use(bodyParser());
  require('koa-validate')(app); // eslint-disable-line

  app.use(function * handleGlobalErrors(next) {
    try {
      yield next;
    } catch (err) {
      logger.error(err);
      this.status = err.status || 500;
      this.body = {
        errors: [{ _global: 'An error has occurred' }],
      };
      this.app.emit('error', err, this);
    }
  });

  require('./routes')(app); // eslint-disable-line
};
