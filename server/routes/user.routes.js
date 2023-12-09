<<<<<<< HEAD
const express = require("express");
const userCtrl = require("../controllers/user.controller.js");
const authCtrl = require("../controllers/auth.controller.js");
=======
<<<<<<< HEAD
import express from 'express';
import userCtrl from '../controllers/user.controller.js';
import authCtrl from '../controllers/auth.controller.js';
=======
const express = require("express");
const userCtrl = require("../controllers/user.controller.js");
const authCtrl = require("../controllers/auth.controller.js");
>>>>>>> tristanMbugua
>>>>>>> bdfa40613b0dd3014693d057973f2a3df751cb22

const router = express.Router();

router
<<<<<<< HEAD
  .route('/api/users')
  .post(userCtrl.create)
  //Complete
  .get(authCtrl.hasAuthorization, userCtrl.list)
  //Finished
  .put(
    // authCtrl.hasAuthorization,
    userCtrl.update)
  .delete(authCtrl.hasAuthorization, userCtrl.remove);

=======
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

>>>>>>> bdfa40613b0dd3014693d057973f2a3df751cb22
router
  .route('/api/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);
router.param("userId", userCtrl.userByID);

module.exports = router;
<<<<<<< HEAD
=======
>>>>>>> tristanMbugua
>>>>>>> bdfa40613b0dd3014693d057973f2a3df751cb22
