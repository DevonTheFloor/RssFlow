const Loger = require('../models/loger')
const Article = require('../models/article')
const jwt = require('jsonwebtoken')

exports.getLogin = (req, res, next) => {
  Loger.findOne({login: req.params.login})
  .then((logers) => { res.status(200).json({
    logers, 
    token: jwt.sign(
      { login: logers.login },
      '5917_KR1ET5_E4MDOM_3KKK@',
      { expiresIn: '6h' }
    )})
  })
  .catch(error => console.log(error))
}
exports.countMyune = (req, res, next) => {
  Article.find({login: req.params.login, page: "myune"}).count()
  .then((number) => {res.status(200).json(number)})
  .catch(error => res.status(400).json(error))
}

exports.countAlire = (req, res, next) => {
  Article.find({login: req.params.login, page: "alire"}).count()
  .then((number => res.status(200).json(number)))
  .catch(error => res.status(400).json(error))
}

exports.getMyune = (req, res, next) => {
  Article.find({login: req.params.login, page: 'myune'})
  .then(articles => res.status(200).json(articles))
  .catch(error => res.status(400).json(error))
}

exports.getAlire = (req, res, next) => {
  Article.find({login: req.params.login, page: 'alire'})
  .then(articles => res.status(200).json(articles))
  .catch(error => res.status(400).json(error))
}

exports.addMyune = (req, res, next) => {
  const article = new Article({
    ...req.body
  })
  article.save()
  .then(() => res.status(200).json({message: 'ressource créée'}))
  .catch(error => res.status(401).json(error))
}

exports.addAlire = (req, res, next) => {
  const article = new Article({
    ...req.body
  })
  article.save()
  .then(() => res.status(200).json({message: 'ressource créée'}))
  .catch(error => res.status(401).json(error))
}

exports.deleteOneLire = (req, res, next ) => {
  Article.deleteOne({_id: req.body.id, login: req.body.login})
  .then(() => res.status(200).json({message: 'delete complete'}))
  .catch(error => res.status(400).json(error))
}

exports.deleteOneUne = (req, res, next ) => {
  Article.deleteOne({_id: req.body.id, login: req.body.login})
  .then(() => res.status(200).json({message: 'delete complete'}))
  .catch(error => res.status(400).json(error))
}