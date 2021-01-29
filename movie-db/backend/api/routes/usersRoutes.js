'use strict';
module.exports = function(app) {
  var userList = require('../controllers/usersController');

  // todoList Routes
  app.route('/users')
    .get(userList.GET_USERS)
    .post(userList.CREATE_USER);


  app.route('/users/:userId')
    .get(userList.READ_USER)
    .put(userList.UPDATE_USER)
    .delete(userList.DELETE_USER);
};