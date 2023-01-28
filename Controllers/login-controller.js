const app = require("../app")
app.post('/login', (req, res) => {
    var body = req.body;
    console.log(body)
    // usersDB.insert(a, (err, resp)=> {
    //     if(err){
    //         console.log(err.errid)
    //     }
    //     res.json(resp)
    // })
    res.json({succsess: "true"})
})