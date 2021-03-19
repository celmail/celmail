const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URI);


  module.exports = async function() {

    try {
      const db = await client.connect();
      return db
    } catch (error) {
      console.log(error);

    }

    
  };