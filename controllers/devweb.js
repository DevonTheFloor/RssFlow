const Parserrss = require('rss-parser');
let parserrss = new Parserrss();
const Gaucode = require('../models/gaucode');
const Mylink = require('../models/mylink');
const Event = require('../models/event');

exports.getGreenIt = (req, res, next) => {
  let feed;
  async function info() {
    feed = await parserrss.parseURL('https://www.greenit.fr/feed/');
  }; 
  info()
  .then(() => {
    res.status(200).json(feed);
  })
};

exports.getLetsEncrypt = (req, res, next) => {
  let feed;
  async function info() {
    feed = await parserrss.parseURL('https://letsencrypt.org/feed.xml');
  }; 
  info()
  .then(() => {
    res.status(200).json(feed);
  })
};

exports.getJdelt = (req, res, next) => {
  let feed;
  async function info() {
    feed = await parserrss.parseURL('https://deltener.com/rss.xml');
  }; 
  info()
  .then(() => {
    res.status(200).json(feed);
  })
};

exports.getOnenet = (req, res, next) => {

  let feed;
  async function info() {
    feed = await parserrss.parseURL('https://www.01net.com/rss/actualites/applis-logiciels/');
  }; 
  info()
  .then(() => {
    res.status(200).json(feed);
  })
};

exports.getAlsa = (req, res, next) => {
  let feed;
  async function info() {
    feed = await parserrss.parseURL('https://www.alsacreations.com/rss/actualites.xml');
  }; 
  info()
  .then(() => {
    res.status(200).json(feed);
  })
};

exports.getJsdev = (req, res, next) => {
  let feed;
  async function info() {
    feed = await parserrss.parseURL('https://www.jesuisundev.com/feed/');
  }; 
  info()
  .then(() => {
    res.status(200).json(feed);
  })
};

exports.getDeveloppez = (req, res, next) => {
  let feed;
  async function info() {
    feed = await parserrss.parseURL('http://web.developpez.com/index/rss');
  }; 
  info()
  .then(() => {
    res.status(200).json(feed);
  })
};

exports.getVuejs = (req, res, next) => {
  let feed;
  async function info() {
    feed = await parserrss.parseURL('https://news.vuejs.org/feed.xml');
  }; 
  info()
  .then(() => {
    res.status(200).json(feed);
  })
};

exports.getPodcastvue =  (req, res, next) => {
  let feed;
  async function info() {
    feed = await parserrss.parseURL('https://feeds.fireside.fm/vuenews/rss');
  }; 
  info()
  .then(() => {
    res.status(200).json(feed);
  })
};

exports.getCourhack =  (req, res, next) => {
  let feed;
  async function info() {
    feed = await parserrss.parseURL('https://lecourrierduhacker.com/rss.xml');
  }; 
  info()
  .then(() => {
    res.status(200).json(feed);
  })
};

exports.getZdnet =  (req, res, next) => {
  let feed;
  async function info() {
    feed = await parserrss.parseURL('https://www.zdnet.fr/feeds/rss/actualites/internet/');
  }; 
  info()
  .then(() => {
    res.status(200).json(feed);
  })
};

exports.getNumerama =  (req, res, next) => {
  let feed;
  async function info() {
    feed = await parserrss.parseURL('https://www.numerama.com/feed/');
  }; 
  info()
  .then(() => {
    res.status(200).json(feed);
  })
};

exports.getJdn = (req, res, next) => {
  let feed;
  async function info() {
    feed = await parserrss.parseURL('https://www.journaldunet.com/rss/');
  }; 
  info()
  .then(() => {
    res.status(200).json(feed);
  })
};

exports.getGaucode = (req,res,next) => {
  Gaucode.find()
  .then( gaucodes => res.status(200).json(gaucodes))
  .catch(error => res.status(404).json({ error }));
};

exports.getMylink = (req,res,next) => {
  Mylink.find()
  .then( mylinks => res.status(200).json(mylinks))
  .catch(error => res.status(404).json({ error }));
};

exports.getEvent = (req,res,next) => {
  Event.find()
  .then( events => res.status(200).json(events))
  .catch(error => res.status(404).json({ error }));
};

exports.getFramablog = (req, res, next) => {
  let feed;
  async function info() {
    feed = await parserrss.parseURL('http://www.framablog.org/index.php/feed/atom');
  }; 
  info()
  .then(() => {
    res.status(200).json(feed);
  })
};

exports.getWebrank = (req, res, next) => {
  let feed;
  async function info() {
    feed = await parserrss.parseURL('https://www.webrankinfo.com/dossiers/feed');
  }; 
  info()
  .then(() => {
    res.status(200).json(feed);
  })
};

exports.getSilicon = (req,res,next) => {
  let feed;
  async function info() {
    feed = await parserrss.parseURL('https://www.silicon.fr/feed');
  }; 
  info()
  .then(() => {
    res.status(200).json(feed);
  })
};

exports.getCodeur = (req,res,next) => {
  let feed;
  async function info() {
    feed = await parserrss.parseURL('https://www.codeur.com/blog/feed');
  }; 
  info()
  .then(() => {
    res.status(200).json(feed);
  })
};

exports.getDavparks = (req,res,next) => {
  let feed;
  async function info() {
    feed = await parserrss.parseURL('https://davidparks.dev/feed.xml');
  }; 
  info()
  .then(() => {
    res.status(200).json(feed);
  })
};
