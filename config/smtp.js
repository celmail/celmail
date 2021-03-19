const SMTPServer = require("smtp-server").SMTPServer;
const parser = require("mailparser").simpleParser;

module.exports = function() {
    const server = new SMTPServer({
        onData(stream, session, callback) {
          parser(stream, {}, (err, parsed) => {
            if (err)
              console.log("Error:" , err)
            
            console.log(parsed)
            stream.on("end", callback)
          })
        },
        disabledCommands: ['AUTH']
    });
    server.listen(process.env.PORT_MAIL, process.env.INTERNAL_IP)
};

