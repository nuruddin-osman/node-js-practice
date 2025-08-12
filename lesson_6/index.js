const app = require("./express/app");
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at this http://localhost:${PORT}`);
});
