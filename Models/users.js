const bcrypt = require('bcrypt');
class User {
    constructor(email, name) {
        this.email = email;
        this._id = email;
        this.name = name;
    }
    
    hashPassword(password) {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        // bcrypt.genSalt(saltRounds, function(err, salt) {
        //     bcrypt.hash(password, salt, function(err, hash) {
        //         console.log(hash)
        //     });
        // });
        console.log(password);
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
              this.password = hash;
            });
        });
    }
}
module.exports = User;