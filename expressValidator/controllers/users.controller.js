const registerContrller = (req, res) => {
  try {
    const { name, email, password, dob } = req.body;
    const newUser = {
      name,
      email,
      password,
      dob,
    };
    return res.status(201).send(newUser);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const loginContrller = (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === "sumon@gmail.com" && password === "12356") {
      return res.status(200).send("login success");
    } else {
      return res.status(400).send("Email or password did not match");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = { registerContrller, loginContrller };
