var userUtil = require('./userUtils');
var userController = {};

userController.testSocketEmit = (req,res) => {
    const io = req.app.get('socketio');
    let data = "This is me.. Socket.. Hello..."
    userUtil.testSocketIO(io, data);
}

module.exports = userController;