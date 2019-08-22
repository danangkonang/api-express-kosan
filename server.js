const port = 3000
const app = require('./app/app')

app.get('/', (req, res, next) => res.send({message:'Hello World!'}))

app.listen(port, () => console.log(`listening on port ${port}!`))