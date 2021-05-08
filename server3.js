const express = require("express");
const app = express();

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html")
});
app.get("/saludo", function (req, res){
    res.sendFile(__dirname + "/saludo.html")
});
app.get("/imagen", function (req, res){
    res.sendFile(__dirname + "/img.jpg")
});

app.listen(3456, function(){
    console.log("Escuchando en puerto 3456...");
})