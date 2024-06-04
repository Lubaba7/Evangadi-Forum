const mysql2 =require('mysql2');

const dbconnection = mysql2.createpool({
user:"Evangadi- admin",
database: "Evangadi-db",
host:"localhost",
password:"123456",
connectionLimit:10
})

dbconnection.execute("select test",(err,result) => {

if(err){

    console.log(err.message)
  
  } else{
console.log(result)



}






})