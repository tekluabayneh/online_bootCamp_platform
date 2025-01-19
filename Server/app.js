const db = require("./db/bdConnection");
const express = require("express");
const app = express();
const cors = require("cors");
const Router = require("./router/AuthRouter");
const checkuser = require("./middleware/middleware");
const port = 8080;

// midelwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
  })
);
app.get("/data", async (req, res) => {
  const query = `SELECT * FROM users`; // Replace "users" with your table name

  try {
    const [result] = await db.execute(query);
    console.log(result); // Log the data
    res.json(result); // Send the data as JSON response
  } catch (err) {
    console.error("Error fetching data:", err);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the data." });
  }
});

app.use("/api/users", Router);
app.get("/user/check", checkuser);

app.get("/", (req, res) => {
  res.status(200).json("welcome");
});
app.get("/show", async (req, res) => {
  const query = `DESCRIBE users`; // Change "users" to your table name

  try {
    const [result] = await db.execute(query); // Execute the query
    console.log(result); // Log the result to the console
    res.json(result); // Send the result as JSON response
  } catch (err) {
    console.error("Error fetching columns:", err); // Log any errors
    res
      .status(500)
      .json({ error: "An error occurred while fetching the table columns." });
  }
});


app.get("/create", async (req, res) => {
  let createtable = `CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(100) NOT NULL,
  lastname VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL
)`;

  let result = await db.execute(createtable);
  console.log(result);
  res.json(result);
});

app.listen(port, async (err) => {
  if (err) {
    console.log("thire was Error" + err);
  }
  console.log(`Server is Running on port ${port}`);
});
//
// const excted = async () => {
// try {
// const result = await db.execute("SELECT 'test'");
// app.listen(port);
// console.log(result);
// } catch (error) {
// console.log(error);
// }
// };
// excted();
//
