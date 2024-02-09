
const express = require("express");
const connectDB = require("./configuration/db");
const dotenv = require("dotenv").config();
const port = 5000;

//connexion à la data base
connectDB();

const app = express();


//app.get("/post", (req, res) => {
//    res.json({ message: "Données server" });
//});

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// lancer le serveur
app.listen(port, () => {
    console.log("Server run ok au port : " + port )
});

