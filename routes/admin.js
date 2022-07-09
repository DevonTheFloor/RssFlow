const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/admin')

router.post('/devweb/mylink/', adminControllers.createLink);
router.post('/devweb/gaucode/', adminControllers.addGauVid);
router.post('/devweb/event/', adminControllers.addEvent);

module.exports = router;