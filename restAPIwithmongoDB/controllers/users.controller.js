const Users = require("../models/users.models");
const { v4: uuidv4 } = require("uuid");

const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getOneUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.findOne({ id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createUsers = async (req, res) => {
  try {
    const newUser = new Users({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateUser = async (req, res) => {
  try {
    let user = await Users.findOne({ id: req.params.id });
    user.name = req.body.name;
    user.age = Number(req.body.age);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await Users.deleteOne({ id: req.params.id });
    res.status(200).json("user delete at successful");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsers, createUsers, deleteUser, updateUser, getOneUser };
