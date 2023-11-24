import express from 'express';
import userCtrl from '../controllers/user.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

router
    .route('/api/users')
        .post(userCtrl.create)    
        //Complete
        .get(authCtrl.hasAuthorization, userCtrl.list)
        //Finished
        .put(authCtrl.hasAuthorization, userCtrl.update)
        .delete(authCtrl.hasAuthorization, userCtrl.remove);

export default router;