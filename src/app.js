const express = require('express');
require("../src/db/conn");
const router = require("../src/routers/men")
const mensRanking = require("../src/models/mens");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(router);




app.listen(port, ()=>{
    console.log(`server is listening on ${port}`);
})