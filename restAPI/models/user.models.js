const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    name: "Taspia",
    age: 16,
  },
];

module.exports = users;
