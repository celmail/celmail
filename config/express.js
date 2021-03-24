const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const configureSocket = require('./socketio');

// Define the Express configuration method
module.exports = function() {
	// Create a new Express application instance
	const app = express();
	const server = http.createServer(app);
    const io = socketio(server);


	
	// pretty JSON
	app.set('json spaces', 4);

	// Load the routing files

	app.use(express.static('dist/celmail'))
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, './../index.html'));
	});
	


	configureSocket(server, io);

	// Return the Express application instance
	return server;
};
