const express = require('express')
var dotenv = require('dotenv').config();
const app = express();
// var nano = require('nano')(process.env.baseUrl);
var nano = require('nano')('http://admin:12345@localhost:5984');
console.log(nano)
nano.db.create("tesla");
var baseDB = nano.db.use("test")
const users = []
app.listen(process.env.port)
app.post('/users', (req, res) => {
    var a ={
        name: "abdullah"
    }
    baseDB.insert(a, (err, resp)=> {
        if(err){
            console.log(err)
        }
        res.json(resp)
    })
    // res.json({})
})