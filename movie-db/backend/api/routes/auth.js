const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

var mongoose = require("mongoose"),
  Users = mongoose.model("Users");

// POST routes/auth
// Desc: Auth user
// Access: Public
exports.AUTH_USER = function (req, res) {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all required fields" });
  }

  // Check for existing user
  Users.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    // Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

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
            },
          });
        }
      );
    });
  });
};
