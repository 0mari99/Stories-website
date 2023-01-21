const express = require('express')
var dotenv = require('dotenv').config();
const app = express();
const nano =  require('nano')(process.env.baseUrl)
nano.auth("admin", "12345")
baseDB = nano.use('tesla')
 
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