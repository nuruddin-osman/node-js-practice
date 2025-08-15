let users = require("../models/user.models");
const { v4: uuidv4 } = require("uuid");

const getUser = (req, res) => {
  res.status(200).json(users);
};
const postUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    age: req.body.age,
  };
  users.push(newUser);
  res.status(200).json(users);
};
const updateUser = (req, res) => {
  const id = req.params.id;
  const { name, age } = req.body;
  const updates = users.filter((item) => item.id === id);
  updates.map((item) => {
    item.name = name;
    item.age = age;
  });
  res.status(200).json(updates);
};
const deleteUser = (req, res) => {
  const id = req.params.id;
  const deletedId = users.filter((item) => item.id !== id);
  res.status(200).json({ data: deletedId, message: "success" });
};

module.exports = { getUser, postUser, updateUser, deleteUser };
