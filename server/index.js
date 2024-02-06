const express = require("express");
const app = express();
const PORT = 4000;

const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:5173", methods: ["GET", "POST"] },
});

server.listen(PORT, () => {
  console.log("listening on *:4000");
});

io.on("connection", (socket) => {
  console.log(`a user connected ${socket.id}`);

  socket.on("send_message", (data) => {
    socket.broadcast.emit("receive_message", data);
  });
});
