const mongoose = require("mongoose")

//Configurando o Mongoose
   mongoose.connect("mongodb://localhost/aprendendo",{
      useMongoClient: true
   }).then(() => {
      console.log("MongoDB Conectado ...")
   }).catch((err) => {
      console.log("Houve um erro ao se conectar ao mongoDB" + err)
   })

   
