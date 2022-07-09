const express = require('express');
const router = express.Router();
const devwebControllers = require('../controllers/devweb');

router.get('/greenit/', devwebControllers.getGreenIt),
router.get('/jdeltener/', devwebControllers.getJdelt),
router.get('/onenet/', devwebControllers.getOnenet), 
router.get('/alsa/', devwebControllers.getAlsa), 
router.get('/jsdev/', devwebControllers.getJsdev), 
router.get('/developpez/', devwebControllers.getDeveloppez), 
router.get('/vuejs/', devwebControllers.getVuejs), 
router.get('/podcastvue/', devwebControllers.getPodcastvue),
router.get('/courhack/', devwebControllers.getCourhack),
router.get('/zdnet/', devwebControllers.getZdnet),
router.get('/numerama/', devwebControllers.getNumerama),
router.get('/jdn/', devwebControllers.getJdn), 
router.get('/gaucode/',  devwebControllers.getGaucode),
router.get('/framablog/', devwebControllers.getFramablog),
router.get('/webrank/', devwebControllers.getWebrank),
router.get('/mylink/', devwebControllers.getMylink),
router.get('/event/', devwebControllers.getEvent),
router.get('/silicon/', devwebControllers.getSilicon),
router.get('/codeur/', devwebControllers.getCodeur),
router.get('/davparks/', devwebControllers.getDavparks),
router.get('/letsencrypt/', devwebControllers.getLetsEncrypt)


module.exports = router;