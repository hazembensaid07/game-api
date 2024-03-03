//including express to our project
const express = require("express");
const connectDB = require("./config/ConnectDB");
const bodyParser = require("body-parser");
//requiring dotenv to access environment varaibles
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT;

//instanciating express
const app = express();
//connecting to DB
connectDB();
//used to allow communication with api
app.use(cors());
//used to allow json with api
app.use(bodyParser.json());
// router
app.use("/api/user", require("./routes/user"));
app.use("/api/gamesession", require("./routes/gamesession"));

// linkin the server to the port
app.listen(PORT, async (err) => {
  err ? console.error(err) : console.log("server is running!!", PORT);
});
