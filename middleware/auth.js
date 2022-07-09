const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, '5917_KR1ET5_E4MDOM_3KKK@');
    const userId = decodedToken.login;
    if (req.body.login && req.body.login !== userId) {
      throw'Id utilisateur inconnu';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      message: "la requête n'a pas de jeton"
    });
  }
};
