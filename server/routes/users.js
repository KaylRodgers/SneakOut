const express = require('express')
const userCtrl = require('../controllers/controller.js');

const router = express.Router();

//create CRUD api 
router.route("/users").get(userCtrl.list).post(userCtrl.create).delete(userCtrl.removeAll);

//create CRUD api based on userID
router
  .route("/users/:userId")
  .get(userCtrl.read)
  .put(userCtrl.update)
  .delete(userCtrl.remove);

router.param("userId", userCtrl.userByID);

module.exports = router;