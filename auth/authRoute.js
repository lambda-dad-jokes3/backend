const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Users = require("./userModel");
const secret = require("../config/secrets");

router.post("/register", (req, res) => {
  const user = req.body;

  if (!user.username) {
    res.status(400).json({ message: "Must enter a username" });
  } else if (!user.password) {
    res.status(404).json({ message: "Must enter a password" });
  } else {
    const hash = bcrypt.hashSync(user.password, 10);

    user.password = hash;
    console.log("user", user);
    Users.add(user)

      .then(user => {
        res.status(201).json(user);
      })
      .catch(err =>
        res
          .status(500)
          .json({ message: "Could not create a new user", error: err })
      );
  }
});

router.get("/users", (req, res) => {
  Users.find()
    .then(user => res.status(200).json(user))
    .catch(err =>
      res.status(500).json({ message: "There was a problem getting the users" })
    );
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Users.findById(id)
    .then(user => {
      if (user[0]) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "Invalid id" });
      }
    })
    .catch(err => res.status(500).json({ message: "That id does not exist" }));
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        console.log(user);
        const token = genToken(user);
        res
          .status(201)
          .json({ message: `Welcome back ${user.username}`, token: token });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    })
    .catch(err => res.status(500).json({ message: "Could not login" }));
});

const genToken = user => {
  const payload = {
    userId: user.id,
    username: user.username
  };

  const options = { expiresIn: "1h" };
  const token = jwt.sign(payload, secret.jwtSecrets, options);
  return token;
};
module.exports = router;
