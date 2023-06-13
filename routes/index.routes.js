const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.post("/signup", (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;

  // Check if email or password or name are provided as empty string
  if (email === "" || password === "" || firstName === "" || lastName === "") {
    res.status(400).json({ message: "Provide email, password and name" });
    return;
  }
});

module.exports = router;
