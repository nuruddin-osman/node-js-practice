const express = require("express");
const app = express();
const Joi = require("joi");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.post("/register", (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      username: Joi.string().alphanum().min(3).max(10).required(),

      password: Joi.string().required().min(5).max(31),
      repeat_password: Joi.ref("password"),

      birth_year: Joi.number()
        .min(1 - 1 - 1950)
        .max(1 - 1 - 2025),

      email: Joi.string().email().required(),
    });

    const users = schema.validate(req.body, {
      abortEarly: false,
      errors: {
        wrap: {
          label: "",
        },
      },
    });

    if (users.error) {
      return res.status(404).send({
        message: "user is not created",
        error: users.error.details.map((err) => err.message),
      });
    }

    res.status(201).json({
      message: "user is created",
      datas: users,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
app.listen(4000, () => {
  console.log(`Server is running at http://localhost:4000`);
});
