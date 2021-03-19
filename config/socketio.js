const configureChat = require('../server/controllers/chatcontroller');

module.exports = function(server, io) {
  io.on('connection', (socket) => {
  	configureChat(io, socket);
  });
};