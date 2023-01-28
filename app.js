require('dotenv').config();
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
var glob = require('glob')
var path = require('path');
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
nano.auth(process.env.userDB, process.env.passDB)
global.usersDB = nano.db.use(process.env.usersDB)
app.listen(process.env.port, () => {
    console.log('Server started on port ' + process.env.port);
});
glob.sync('./routes/**/*.js' ).forEach( function(file) {
  require(path.resolve(file))(app);
});