const express = require('express')
const app = express();
var dotenv = require('dotenv').config();
var nano = require('nano')(process.env.baseUrl);
const baseDB= nano.db.use(process.env.bdName)
const users = []
app.listen(process.env.port)
app.post('/users', (req, res) => {
    var a ={
        name: "abdullah"
    }
    baseDB.insert(a)
    res.json({})
})