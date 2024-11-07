const express = require("express");
const Router = express.Router();
const { login, Register } = require("../controller/Auth");

Router.get("/login", login);
Router.post("/Register", Register);

module.exports = Router;
