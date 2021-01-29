// Start the application server. It will serve the application on 4000 port
// CMD: npm run server
require("dotenv").config();

const cors = require("cors");
const jwt = require("jsonwebtoken");

var express = require("express"),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require("mongoose"),
  User = require("./api/models/usersModel"), //created model loading here
  bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/users");

// enable CORS
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/usersRoutes"); //importing route
routes(app); //register the route

app.listen(port, () => {
  console.log("Server started on: " + port);
});
