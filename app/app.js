const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 3000

app.use(bodyParser.json())

const ControllersRoom = require('../controllers/rooms')
const ControllersUser = require('../controllers/users')

app.group("/api/v1", (router) => {
    router.get('/rooms', ControllersRoom.index)    
    router.get('/room/:id', ControllersRoom.show)    
    router.post('/room', ControllersRoom.store)    
    router.patch('/room/:id', ControllersRoom.update)    
    router.delete('/room/:id', ControllersRoom.delete)
})

app.group("/user", (router) => {
    router.post('/login', ControllersUser.login)    
    router.post('/register', ControllersUser.register)
})



module.exports = app;