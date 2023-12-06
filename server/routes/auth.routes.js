<<<<<<< HEAD
import express from 'express';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

router
    .route('/auth/signin')
    .post(authCtrl.signin);

router
    .route('/auth/signout')
    .get(authCtrl.signout);

export default router;
=======
const express = require('express');
const authCtrl = require('../controllers/auth.controller');

const router = express.Router();

router.route('/api/auth/signin') .post(authCtrl.signin);
    

router
    .route('/api/auth/signout')
    .get(authCtrl.signout);

module.exports = router;
>>>>>>> tristanMbugua
