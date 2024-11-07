const db = require("./db/bdConnection");
const express = require("express");
const app = express();
const cors = require("cors");
const Router = require("./router/AuthRouter");
const port = 3000;

// midelwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
  })
);


app.use("/api/users", Router);

app.listen(port, async (err) => {
  if (err) {
    console.log("thire was Error" + err);
  }
  console.log(`Server is Running on port ${port}`);
});

// const excted = async () => {
//   try {
//     const result = await db.execute("SELECT 'test'");
//     app.listen(port);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// excted();
