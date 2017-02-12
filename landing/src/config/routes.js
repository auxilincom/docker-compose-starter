const Router = require('koa-router');
const config = require('./index.js');
const router = new Router();

router
  .get('/', function * mainPage() {
    yield this.render('index');
  });

module.exports = (app) => {
  app.use(router.routes());
};
