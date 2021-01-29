var mongoose = require('mongoose'),
  Users = mongoose.model('Users');

exports.GET_USERS = function(req,res) {
    Users.find({}, function(err, users) {
        if (err)
          res.send(err);
        res.json(users);
      });
};

exports.CREATE_USER = function(req, res) {
    var new_user = new Users(req.body);
    new_user.save(function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
};

exports.READ_USER = function(req, res) {
    Users.findById(req.params.userId, function(err, user) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

exports.UPDATE_USER = function(req, res) {
    Users.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };

exports.DELETE_USER = function(req, res) {
    Users.remove({
      _id: req.params.userId
    }, function(err, user) {
      if (err)
        res.send(err);
      res.json({ message: 'User successfully deleted' });
    });
  };