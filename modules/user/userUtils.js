var userUtil = {};

userUtil.testSocketIO = (io, data) => {
  // Emit data from server to client
  io.emit('SocketFromNode', data);
}

module.exports = userUtil;