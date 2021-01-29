const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
  const {
    first_name,
    last_name,
    email,
    password,
    status,
    permission_level,
  } = req.body;

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
      status,
      permission_level,
    });

    // Create salt & hash for password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          //Token, expire in 1 hour (3600 sec)
          jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;

              res.json({
                token,
                user: {
                  id: user.id,
                  last_name: user.last_name,
                  first_name: user.first_name,
                  email: user.email,
                  status: user.status,
                  permission_level: user.permission_level,
                },
              });
            }
          );
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
