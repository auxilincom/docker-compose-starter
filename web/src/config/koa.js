const routes = require('./routes');
const handlebars = require('koa-handlebars');
const config = require('config');
const path = require('path');
const conditional = require('koa-conditional-get');
const etag = require('koa-etag');

module.exports = (app) => {
  app.use(conditional());
  app.use(etag());

  app.use(handlebars({
    root: path.join(__dirname, '../'),
    viewsDir: 'views',
    cache: false,
  }));

  app.use(function *(next) {
    try {
      yield next;
    } catch (err) {
      console.error(err);
      this.status = err.status || 500;
      this.body = 'Internal Server Error';
    }
  });

  routes(app);
};
