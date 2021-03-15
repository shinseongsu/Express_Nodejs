const redis = require("redis");
const client = redis.createClient();

// 연결 에러시 메시지
client.on("error", function(error) {
    console.error(error);
});

client.hmset('fruit', {
    lemon: 5000,
    green: 2000
});

client.hgetall('fruit', (err, res) => {
    console.log(res);
});