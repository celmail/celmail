const SMTPServer = require("smtp-server").SMTPServer;
const parser = require("mailparser").simpleParser;
var fs = require('fs');


module.exports = function() {
    const server = new SMTPServer({
        onData(stream, session, callback) {
            parser(stream, {}, (err, parsed) => {
                if (err)
                    console.log("Error:" , err)
                console.log(parsed)
                fs.writeFileSync('mail.json', JSON.stringify(parsed), (err) => {
                    // throws an error, you could also catch it here
                    if (err) throw err;
                
                    // success case, the file was saved
                    console.log('mail saved!');
                });
                stream.on("end", callback)
          })
        },
        disabledCommands: ['AUTH']
    });
    server.listen(process.env.PORT_MAIL, process.env.INTERNAL_IP)
};

