const mysql = require("mysql2");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "online_platform",
  port: "3306",
  queueLimit: 10,
});

module.exports = db.promise();
