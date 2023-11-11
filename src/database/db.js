const mongoose = require('mongoose');

const connectDatabase = () => {
    console.log("wait connecting to the database");

    mongoose.connect("mongodb+srv://Marcelino:MarcelinoMariaeGustavo@cluster0.id7gd69.mongodb.net/?retryWrites=true&w=majority" ).then(() => console.log("MongoDB Atlas Conected",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })).catch((error) => console.log(error));
    /*const conection = mongoose.Connection;*/
}

module.exports = connectDatabase