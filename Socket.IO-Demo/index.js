// Set up an Express application
const app = require('express')();
// Express initializes app to be a function handler that you can supply to an HTTP server
var http = require('http').Server(app);
// Initialize a new instance of `socket.io` by passing the `http` (the http server) object
var io = require('socket.io')(http);

const port = process.env.PORT || 5000;

// Express. Define a route handler `/` that gets called when we hit our website home.
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Listen on the `connection` event for incoming sockets, and log it to the console.
io.on('connection', function(socket){

	console.log('A user connected.');

	socket.on('chat message', function(msg){
		console.log('message: ' + msg);
		io.emit('chat message', msg);
	});

	// Each socket also fires a special `disconnect` event
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});

/*
      window.onload = function() {
          var fileInput = document.getElementById('fileInput');
          var fileDisplayArea = document.getElementById('testBox');

          fileInput.addEventListener('change', function(e) {
              var file = fileInput.files[0];
              var textType = /text. * /

			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					fileDisplayArea.innerText = reader.result;
				}

				reader.readAsText(file);
			} else {
				fileDisplayArea.innerText = "File not supported!"
			}
			});
			}
*/

io.on('test', function(socket) {
	console.log('this is a test');
});

// Express. Make the http server listen on port `5000`.
http.listen(port, function(){
  console.log('listening on *:' + port);
});
