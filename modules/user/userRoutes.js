const exp = require('express');
const userController = require('./userController.js');
const userRouter = exp.Router();

userRouter.get('/testSocket', userController.testSocketEmit);

module.exports = userRouter;