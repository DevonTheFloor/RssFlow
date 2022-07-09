const Mylink = require('../models/mylink');
const Gaucode = require('../models/gaucode');
const Event = require('../models/event');

exports.createLink = (req,res,next) => {
  let sujet = new Mylink ({
    ...req.body,
    pubDate: Date.now()
  })
  sujet.save()
  .then(() => res.status(201).json({ message: 'Lien enregistré !'}))
  .catch(error => res.status(400).json({message:"probleme de connexion avec la base"}));
};

exports.addGauVid = (req, res, next) => {
  let video = new Gaucode({
    ...req.body,
    pubDate: Date.now()
  })
  video.save()
  .then(() => res.status(201).json({message: 'Vidéo Ajoutée'}))
  .catch(error => res.status(400).json({message: "probleme de connexion avec la base" }));
};

exports.addEvent = (req, res, next) => {
  let newevent = new Event({
    ...req.body,
    pubDate: Date.now()
  })
  newevent.save()
  .then(() => res.status(201).json({message: 'Evenement Ajouté'}))
  .catch(error => res.status(400).json({message: "probleme de connexion avec la base" }));
}