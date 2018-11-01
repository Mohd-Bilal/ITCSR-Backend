const jwt = require('jsonwebtoken');
var config = require('../config/api.json');
const secret = config.API_SECRET; //+ user's unique secret";

function jwtVerifyToken(req, res, next)
{
  const token = req.headers['x-access-token'];
  if (!token)
  {
    debug('no token');
    return res.status(403).send({ auth : false, message : 'No token provided.' });
  }
  return jwt.verify(token, secret, function(err, decoded)
  {
    if (err)
    {
      debug('failed verification');
      return res.status(500).send({ auth : false, message : 'Failed to authenticate token.' });
    }

    // if everything good, save to request for use in other routes
    debug('everything good');
    // req.userId = decoded.id;
    req.decoded = decoded;
    return next();
  });
}
module.exports = jwtVerifyToken;
