const express = require('express');
const app = express();
const port = 5500
//user routs middleware file
const userRoutes = require("./routes/userRoute")

app.use("/api/users", userRoutes)

//////
app.listen(5500, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`listening on ${port}`)
    }
})

