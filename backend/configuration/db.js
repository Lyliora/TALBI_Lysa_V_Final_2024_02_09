//connexion a la data base avec la clé URI stoqué dans .env

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGO_URI); 
        console.log("Mongo connecté");

    } catch (err) {
        console.log("error");
        process.exit();
    }
};

module.exports = connectDB;