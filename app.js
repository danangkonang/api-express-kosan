require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');

const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(express.json());

app.use(require('./router'))

app.all('*', (req, res) => {
  res.status(404).json({
    status: 404,
    message: '404'
  })
});

server.listen(process.env.APP_PORT, function() {
  console.log('App running on http://localhost:' + process.env.APP_PORT);
});
