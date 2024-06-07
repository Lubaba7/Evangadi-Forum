const mysql2 =require('mysql2');

const dbconnection = mysql2.createPool({
user: "admin",
database: "Evangadi-db",
host:"localhost",
password:"123456",
connectionLimit:10
})

module.exports = dbconnection.promise()