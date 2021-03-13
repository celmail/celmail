const express = require('express')
const app = express()
const port = 3000
const SMTPServer = require("smtp-server").SMTPServer;
const parser = require("mailparser").simpleParser

app.get('/', (req, res) => {
    res.send('Hello World!')
});
app.get('/server', (req, res) => {

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
  
    server.listen(25, "192.168.30.100")
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})