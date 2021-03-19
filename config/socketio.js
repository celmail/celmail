const configureChat = require('../server/controllers/chat.controller');

module.exports = function(server, io) {
  io.on('connection', (socket) => {
  	configureChat(io, socket);
  });
};