const app = require('koa')();
const router = require('koa-router')();
const Pug = require('koa-pug');

const pug = new Pug({
  viewPath: './dist/views',
  debug: false,
  pretty: false,
  compileDebug: false,
  app
});

router.get('/', function *(next) {
  this.render('index', {}, true);
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
