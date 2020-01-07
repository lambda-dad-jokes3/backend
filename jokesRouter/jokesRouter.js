const router = require("express").Router();

const Jokes = require("./jokesModel");
const authorization = require("../auth/auth-middleware");

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

router.post("/:id/add-joke", authorization, (req, res) => {
  const jokeBody = req.body;
  Jokes.add(jokeBody)
    .then(joke => {
      console.log(jokeBody);
      res.status(201).json(joke);
    })
    .catch(err =>
      res.status(500).json({
        message: "There was a problem with creating the joke",
        error: err
      })
    );
});

router.put("/:id/edit-joke", (req, res) => {
  const changes = req.body;
  const id = req.params.id;

  Jokes.updateJoke(id, changes)
    .then(update => {
      res.status(200).json({ message: `Joke ${update.id} has been updated` });
    })
    .catch(err =>
      res
        .status(500)
        .json({ message: "There was a problem with editing the joke" })
    );
});

router.delete("/:id/delete-joke", (req, res) => {
  const id = req.params.id;

  Jokes.remove(id)
    .then(joke => {
      res.status(200).json({ message: "Joke was deleted" });
    })
    .catch(err =>
      res
        .status(500)
        .json({ message: "There was a problem with deleting the joke" })
    );
});

module.exports = router;

// joke;
// punchline;
