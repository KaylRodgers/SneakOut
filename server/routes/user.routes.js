<<<<<<< HEAD
import express from 'express';
import userCtrl from '../controllers/user.controller.js';
import authCtrl from '../controllers/auth.controller.js';
=======
const express = require("express");
const userCtrl = require("../controllers/user.controller.js");
const authCtrl = require("../controllers/auth.controller.js");
>>>>>>> tristanMbugua

const router = express.Router();

router
<<<<<<< HEAD
    .route('/api/users')
        .post(userCtrl.create)    
        //Complete
        .get(authCtrl.hasAuthorization, userCtrl.list)
        //Finished
        .put(authCtrl.hasAuthorization, userCtrl.update)
        .delete(authCtrl.hasAuthorization, userCtrl.remove);

export default router;
=======
  .route('/api/users')
  .post(userCtrl.create)
  //Complete
  .get(authCtrl.hasAuthorization, userCtrl.list)
  //Finished
  .put(
    // authCtrl.hasAuthorization,
    userCtrl.update)
  .delete(authCtrl.hasAuthorization, userCtrl.remove);

router
  .route('/api/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);
router.param("userId", userCtrl.userByID);

module.exports = router;
>>>>>>> tristanMbugua
