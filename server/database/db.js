const mongoose = require("mongoose");

const connection = async ( username,password ) =>{
    const URL = `mongodb+srv://${username}:${password}@application.07fnwqx.mongodb.net/?retryWrites=true&w=majority`;
    try{
      await  mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true});
      console.log("Database connected Successfully")

    } catch(error){
        console.log("error while connected mongoDB", error)
    }
}

module.exports = connection