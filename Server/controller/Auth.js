const { json } = require("express");
const db = require("../db/bdConnection");
const bcrypt = require("bcrypt");
const Register = async (req, res) => {
  const { firstname, lastname, password, email } = req.body;

  // checking if the user required filde is filled
  if (!firstname || !lastname || !password || !email) {
    res.status(400).json({ Msg: "all filed is requied" });
    return;
  }
  try {
    // check if the user has laready acount
    const query = `SELECT * FROM userdb WHERE  email = ?`;
    const [result] = await db.execute(query, [email]);

    // check is the user is not already exist
    if (result.length > 0) {
      res.status(400).json({ Msg: "The user has already registered" });
      console.log("user already exist");
      return;
    }
    // hash the password
    const salt = await bcrypt.genSalt(10);
    const HashedPassword = await bcrypt.hash(password, salt);

    // add the user if the user is not register before
    const inserQuery = `INSERT INTO userdb(firstname, lastname, password, email)VALUES(?, ?, ?, ?)`;
    await db.execute(inserQuery, [firstname, lastname, HashedPassword, email]);

    // response the success if it success
    res.status(200).json("Succes");
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
const login = async (req, res) => {
  res.json("welcome home teklu from login");
  console.log("login is Scucess");
};
module.exports = { login, Register };
