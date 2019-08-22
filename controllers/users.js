const connection = require('../db')



exports.login = (req, res) => {
    const { email,password } = req.body

    connection.query(
        "SELECT * FROM users WHERE email=? AND password=?",
        [email,password],(err,row,field)=>{
        
            if(err){
                console.log(err)
                res.send({'succes':false,'message':'db error'})
            }
            if(row.length > 0){
                res.send({'succes':true,'message':row[0]})
            }else{
                res.send({'succes':false,'message':'email not found'})
            }
    })
}

exports.register = (req, res) => {
    const { user,email,password } = req.body    

    connection.query(`INSERT INTO users (user,email,password) VALUES ('${user}', '${email}', '${password}')`, (err)=> {
        if (err) throw err
    })    

    res.send({
        success: true,
        data: req.body
    })
    
}

exports.update = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ
}

exports.delete = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ
}