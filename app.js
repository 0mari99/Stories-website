const express = require('express')
const app = express();
const users = []
app.listen(3000)
app.get('/users', (req, res) => {
    res.json(users)
})