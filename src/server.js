const Koa = require('koa');
const {initAll} = require('koa-serve-decorator');

let app = new Koa();
app.use(initAll({
    dirs: [
        [`${__dirname}/controller`],
        [`${__dirname}/service`],
    ],
    route:{
        base: ['/api', 'get'],
    }
}));

let port = null;
if(!isNaN(+process.argv[2])){
    port = +process.argv[2];
}
try{
    let server = app.listen(port, ()=>{
        let {port} = server.address();
        console.log(`Server started at: http://localhost:${port}`);
    });
}catch(err){
	console.error(err);
}