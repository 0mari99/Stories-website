const express = require('express')
var dotenv = require('dotenv').config();
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const nano =  require('nano')({
    url: process.env.baseUrl,
    requestDefaults: {
      pool: {
        maxSockets: 30
      }
    }
  })
nano.auth( process.env.userDB, process.env.passDB)
var baseDB = nano.use('tesla')
var usersDB = nano.use('profiles_db')
app.listen(process.env.port, () => {
    console.log('Server started on port ' + process.env.port);
});
module.exports = app;