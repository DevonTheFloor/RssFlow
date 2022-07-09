const githubCtrl = require('../controllers/github');
const express = require('express');
const router = express.Router();

router.get('/github/', githubCtrl.getUser);

module.exports = router;
