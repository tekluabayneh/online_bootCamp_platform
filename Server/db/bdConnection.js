// const mysql = require("mysql2");
// const dtoenv = require("dotenv");
// dtoenv.config();
// const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
//   queueLimit: 10,
// });
/////////////////////////////////////////////////////////////////////////////

// module.exports = db.promise();
// const mysql = require("mysql2");
// const dotenv = require("dotenv");

// Load environment variables
// dotenv.config();

// Use the connection URL provided by Railway
// const db = mysql.createPool({
// uri: process.env.MYSQL_URL,
// queueLimit: 10,
// });

// module.exports = db.promise();
const mysql = require("mysql2");

var hostname = "1c8st.h.filess.io";
var database = "userdb_movementup";
var port = "3307";
var username = "userdb_movementup";
var password = "5d573eb373acd3aa7a5332b92ed1ad1fad19cf3b";

var db = mysql.createPool({
  host: hostname,
  user: username,
  password,
  database,
  port,
});

db.query("SELECT 1+1").on("result", function (row) {
  console.log(row);
  console.log("database is connected");
});

module.exports = db.promise();
