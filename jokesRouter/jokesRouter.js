const router = require("express").Router();

const Jokes = require("./jokesModel");

router.get("/", (req, res) => {
  Jokes.find()
    .then(joke => res.status(200).json(joke))
    .catch(err =>
      res.status(400).json({ message: "Could not retrieve jokes" })
    );
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  Jokes.findById(id)
    .then(joke => {
      res.status(200).json(joke);
    })
    .catch(err => res.status(500).json({ message: "This id does not exist" }));
});

router.post("/:id/add-joke", (req, res) => {
  const jokeBody = { ...req.body, userId: req.params.id };
  // if (!jokeBody.question) {
  //   res.status(404).json({ message: "Please add a question" });
  // } else if (!jokeBody.punchline) {
  //   res.status(404).json({ message: "Please add a punchline" });
  // } else if (!jokeBody.public) {
  //   res.status(404).json({ message: "Please add public option" });
  // } else if (!id) {
  //   res.status(404).json({ message: "This id does not exist" });
  // } else {
  console.log("jokebody", jokeBody);

  Jokes.add(jokeBody)
    .then(joke => {
      console.log(joke);
      res.status(201).json({ message: "joke was created" });
    })
    .catch(err =>
      res.status(500).json({
        message: "There was a problem with creating the joke",
        error: err
      })
    );
  // }
});

router.put("/:id/edit-joke", (req, res) => {
  const changes = req.body;
  const id = req.params.id;

  Jokes.updateJoke(id, changes)
    .then(update => {
      console.log("update", update);
      res.status(200).json(update);
    })
    .catch(err =>
      res
        .status(500)
        .json({ message: "There was a problem with editing the joke" })
    );
});

router.delete("/:id/delete-joke", (req, res) => {
  const id = req.params.id;

  if (!id) {
    res.status(404).json({ message: "That id does not exist" });
  } else {
    Jokes.remove(id)
      .then(joke => {
        res.status(200).json({ message: "Joke was deleted" });
      })
      .catch(err =>
        res
          .status(500)
          .json({ message: "There was a problem with deleting the joke" })
      );
  }
});

module.exports = router;
