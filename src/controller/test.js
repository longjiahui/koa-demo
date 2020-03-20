const {route, query} = require('koa-serve-decorator');

@route('/test')
class TestController{

    @route('/hello')
    async hello(ctx, next){
        ctx.body = `Hello ${ctx.testService.getUserIp()}`;
        await next();
    }
}