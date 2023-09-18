const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: {
        origin: "http://localhost:8080"
    } });

app.get('/', (req, res) => {
    res.send('ok');
});

app.listen(3000, async() => {
    console.log('listening');
});

io.on("connection", (socket) => {
    console.log(`client`, socket);
});

httpServer.listen(3001);