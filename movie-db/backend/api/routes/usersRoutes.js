"use strict";
module.exports = function (app) {
  var userList = require("../controllers/usersController");
  var authUser = require("../routes/auth");

  // user Routes
  app.route("/users").get(userList.GET_USERS).post(userList.CREATE_USER);

  app
    .route("/users/:userId")
    .get(userList.READ_USER)
    .put(userList.UPDATE_USER)
    .delete(userList.DELETE_USER);

  app.route("/auth").post(authUser.AUTH_USER);
};
