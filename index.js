require('dotenv').config();  
const configureMongoose = require('./config/mongoclient');
const configureExpress = require('./config/express');
const configureSMTP = require('./config/smtp');
//const configurePassport = require('./config/passport');

if (process.env.NODE_ENV !== 'production') {
  
}
const db = configureMongoose();
const app = configureExpress();
const smtp = configureSMTP();
//const passport = configurePassport();

app.listen(process.env.PORT);

module.exports = app;
