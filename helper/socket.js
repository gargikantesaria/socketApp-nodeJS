const socketData = {};
socketData.createSocketServer = (io) => {
  io.on('connection', function(socket) {
    console.log('A user connected', socket);
 
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });

    // To get the data emitted by the client 
    socket.on('DataSuccessful', function () {
      console.log('Data successfully recceived from client event emitted.');
    })
 });
}
module.exports = { socketData };