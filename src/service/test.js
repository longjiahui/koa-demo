const {service} = require('koa-serve-decorator');

@service
class TestService {
    getUserIp(){
        let {req} = this.ctx;
        return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    }
}