const bcrypt = require("bcryptjs");

var mongoose = require("mongoose"),
  Users = mongoose.model("Users");

// GET users
// Desc: Get all users
exports.GET_USERS = function (req, res) {
  Users.find({}, function (err, users) {
    if (err) res.send(err);
    res.json(users);
  });
};

// POST users
// Desc: Register new user
exports.CREATE_USER = function (req, res) {
  const { first_name, last_name, email, password } = req.body;

  // Simple validation
  if (!first_name || !last_name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all required fields" });
  }

  // Check for existing user
  Users.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exist" });

    const newUser = new Users({
      first_name,
      last_name,
      email,
      password,
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          res.json({
            user: {
              id: user.id,
              last_name: user.last_name,
              first_name: user.first_name,
              email: user.email,
            },
          });
        });
      });
    });
  });
};

exports.READ_USER = function (req, res) {
  Users.findById(req.params.userId, function (err, user) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.UPDATE_USER = function (req, res) {
  Users.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    function (err, user) {
      if (err) res.send(err);
      res.json(user);
    }
  );
};

exports.DELETE_USER = function (req, res) {
  Users.remove(
    {
      _id: req.params.userId,
    },
    function (err, user) {
      if (err) res.send(err);
      res.json({ message: "User successfully deleted" });
    }
  );
};
