const express = require('express');
const userCtrl = require('../controllers/user.controller.js');
const authCtrl = require('../controllers/auth.controller.js');

const router = express.Router();

router
    .route('/api/users')
        .post(userCtrl.create)    
        //Complete
        .get(authCtrl.hasAuthorization, userCtrl.list)
        //Finished
        .put(authCtrl.hasAuthorization, userCtrl.update)
        .delete(authCtrl.hasAuthorization, userCtrl.remove);

module.exports = router;