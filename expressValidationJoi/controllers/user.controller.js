const registerUser = (req, res) => {
  try {
    const newUser = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    if (newUser) {
      res.status(201).json({
        message: "user is created",
        datas: newUser,
      });
    } else {
      res.status(500).json({ message: "User creation failed" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const loginUser = (req, res) => {
  try {
    res.status(201).json({
      message: "user is loggedin",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { registerUser, loginUser };
