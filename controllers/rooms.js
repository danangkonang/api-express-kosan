const connection = require('../db')

exports.index = (req, res) => {
    connection.query('SELECT * FROM room', (err, rows)=> {
        if (err) throw err
      
        res.send(rows)
    })    
}

exports.show = (req, res) => {
    connection.query(`SELECT * FROM room WHERE id=${req.params.id}`, (err, rows)=> {
        if (err) throw err
      
        res.send(rows[0])
    })
}

exports.store = (req, res) => {
    const { name, address, longitude,latitude,cover,user_id } = req.body    

    connection.query(`INSERT INTO room (name,address,longitude,latitude,cover,user_id) VALUES ('${name}', '${address}', '${longitude}', '${latitude}', '${cover}', ${user_id})`, (err)=> {
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