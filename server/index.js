const Koa = require('koa');
const static = require('koa-static');
const path = require('path');
const Server = require('ws').Server;

const app = new Koa();
const ws = new Server({
    port: 8092
})

app.use(static(path.join(__dirname, './static')));

ws.on('connection', (socket) => {
    socket.on('message', (data) => {
        const {
            num,
            msg
        } = JSON.parse(data);

        console.log(msg);

        socket.send(`这是给客户端返回第${num}条数据`);
    })
})


app.listen(8090);