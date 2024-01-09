require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const PORT = 3000;
const DB_URL = process.env.DB_URL

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const AuthRoutes = require('./Routes/auth/linkedin')

app.use(cors());
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

mongoose.connect(DB_URL).then(()=>{
    console.log("mongo is connected")
}).catch((e)=>{
    console.log("error in connecting mongo",e)
})

//Routes middleware
app.use('/auth',AuthRoutes)


app.listen(PORT,()=>{
    console.log("Server started in port 3000")
})