const request = require('request');

const proxyserver = (req, res, target) => {
  var options = {
    'method': req.method,
    'url': target + req.originalUrl,
    'headers': {
      'User-Agent': req.headers['user-agent'] || 'my-app',
      'Authorization': req.headers['authorization'] || '',
      'Content-Type': req.headers['content-type'] || 'application/json'
    },
    body: JSON.stringify(req.body)
  };
  request(options, function (error, response) {
    if (error) {
      return res.status(500).json({
        message: 'internal server error'
      })
    }
    return res.json(
      JSON.parse(response.body)
    )
  });
}

module.exports = {
  proxyserver
};
