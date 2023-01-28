const User = require('../models/users');
module.exports = function (app) {
    app.post('/login', (req, res) => {
        var body = req.body;
        var email = body.email;
        var dbUser = usersDB.getDocumentBy_Id(process.env.usersDB, email)
        var userModel = new User(body.email)
        // usersDB.insert(a, (err, resp)=> {
        //     if(err){
        //         console.log(err.errid)
        //     }
        //     res.json(resp)
        // })
        res.json({succsess: "true"})
    })
    app.post('/sign-up', (req, res) => {
        var body = req.body;
        var email = body.email;
        var password = body.password
        var userModel = new User(email, body.name)
        userModel.hashPassword(password);
        // usersDB.insert(a, (err, resp)=> {
        //     if(err){
        //         console.log(err.errid)
        //     }
        //     res.json(resp)
        // })
        res.json({succsess: "true"})
    })
}