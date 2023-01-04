require("dotenv").config();

const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const port = process.env.PORT || 3000;
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const app = express();
const http = require('http').createServer(app);


const io = require('socket.io')(http, {
  cors: {
    origins: "*"
  }
});


io.on('connection', (socket) => {
  console.log("User connected with socket:", socket.id);
  const { getAllScootersSocket } = require('./modules/scooter/getScootersWithoutRequest');

  socket.emit("connecting")

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on("rentScooter", (id) => {
    console.log("renting")
    getAllScootersSocket(socket);
  })

  getAllScootersSocket(socket);
});

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected Successfully");
});


app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({origin: 'http://localhost:8080'}));
app.use(express.json());
app.use(cookieParser());

const ver1 = require("./routes/v1.js");

app.use("/v1", ver1);


http.listen(port, () => {
  console.log(`Server Started at ${port}`);
});

module.exports = { port, database, io, bodyParser };