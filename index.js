let express = require(`express`);
let app = express();
let port = 443;

app.listen(port, function () {
    console.log(`http://localhost:${port}`);
})

// Раздача статики
app.use(express.static(`public`));

app.get('/', function (req, res) {
    let ip = req.socket.remoteAddress;

    res.send(ip);
});
