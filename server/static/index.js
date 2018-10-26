let ws = new WebSocket('ws://localhost:8092');
let tiemr = null;

ws.onopen = () => {
    ws.send(JSON.stringify({
        msg: '开始建立连接了~~~',
        num: 0
    }));
    let i = 0;
    timer = setInterval(() => {
        i ++;

        ws.send(JSON.stringify({
            msg: `这是客户端发的第${i}条消息`,
            num: i
        }));

    }, 3000)
}

ws.onmessage = (res) => {
    console.log(res);
    console.log(res.data);
}

ws.onerror = (err) => {
    console.log(err);
    clearInterval(tiemr);
}

ws.onclose(() => {
    console.log('连接断开了。');
})

