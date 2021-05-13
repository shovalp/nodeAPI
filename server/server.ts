import express = require('express');
import http = require('http');

const socketIo = require("socket.io");
const port = 3000;
// Create a new express app instance
const app: express.Application = express();
app.use(express.json());
app.use(express.urlencoded());
// app.post('/remove', function (req, res) {
//   console.log('req: ', req.body);
//   res.send(JSON.stringify(req.body));
// });

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"]
  }
});


// app.listen(3000, function () {
//   console.log('App is listening on port 3000!');
// });
io.on("connection", (socket: any) => {

  socket.on('removeReq', (data: any) => {
    socket.emit('removeRes', data);
  });
});


server.listen(port, () => console.log(`Listening on port ${port}`));