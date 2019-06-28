const clientSocketData = {};
clientSocketData.createClientSocketServer = (clientio) => {
  
  // connect with server as a client
  clientio.on('connect', function() {
    console.log('A user connected');
    
    //Catch event fired by server
    clientio.on('connectionData', function(data) {
      console.log(data);
      // Emit to server as a client
      clientio.emit('connected', {data:'I am from 5000'});
    })
    
    //Whenever someone disconnects this piece of code executed
    clientio.on('disconnect', function () {
       console.log('A user disconnected');
    });
 });
}
module.exports = { clientSocketData };