const express = require('express');
const app = express();
const port = 5500



//db connection
const dbconnection =require("./db/dbConfige")

//user routs middleware file
const userRoutes = require("./routes/userRoute")
app.use(express.json())

app.use("/api/users", userRoutes)

///json middleware to extract json data





//////
app.listen(5500, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`listening on ${port}`)
    }
})

