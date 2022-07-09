const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const userCtrl = require('../controllers/user');
const userSignup = require('../controllers/github')

router.get('/userid/:login', userCtrl.getLogin);
router.get('/myune/:login', userCtrl.getMyune);
router.get('/alire/:login', userCtrl.getAlire);
router.get('/lsmyune/:login', userCtrl.countMyune);
router.get('/lsalire/:login', userCtrl.countAlire);
router.post('/myune/',auth, userCtrl.addMyune);
router.post('/alire/',auth, userCtrl.addAlire);
router.delete('/alire/',auth, userCtrl.deleteOneLire);
router.delete('/myune/',auth, userCtrl.deleteOneUne);


module.exports = router;