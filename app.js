require('dotenv').config();
var http = require('http');
var cors = require('cors');
var exp = require('express'); 

var bodyParser = require("body-parser");
var app = exp();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());


app.use((req,res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,OPTIONS,PATCH');
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,authtoken,isadmintoken,Accept,Content-Type,Authorization')
  // Pass to next layer of middleware
  next();
});

app.use('/api', require('./routes/config'));

var server = http.createServer(app);
const io = require('socket.io')(server);

const socketFile = require('./helper/socket');

socketFile.socketData.createSocketServer(io);
app.set('socketio', io);

server.listen(process.env.SERVER_PORT, () => {
  console.log("server started");
})