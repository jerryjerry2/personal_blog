const con = require('../config/db');

const getAll = (req, res) => {
    con.query('select * from user', (err, result) => {
        if(err){
            console.log(err);
        }else{
            console.log(result);
            res.render('user/index', {result});
        }
    }) 
}

module.exports = {
    getAll
}