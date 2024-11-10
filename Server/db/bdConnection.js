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
const mysql = require("mysql2");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Use the connection URL provided by Railway
const db = mysql.createPool({
  uri: process.env.MYSQL_URL,
  queueLimit: 10,
});


module.exports = db.promise();
