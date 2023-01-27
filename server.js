var express = require('express');
var server = express();
var mongoose = require('mongoose');
var routes = require('./routes/routes')
const cors = require('cors');

server.use(express.json());
server.use(routes);
server.use(cors());

server.listen(8000, function check(error){
    if (error) {
        console.log("Error Papu");
    } else {
        console.log("Conectado al puerto 8000");
    }
});

mongoose.set('strictQuery', true)
mongoose.connect("mongodb://localhost:27017/est", {useNewUrlParser: true, useUnifiedTopology:true}, function checkBD(error){
    if (error) {
        console.log("Error Papu")
    } else {
        console.log("Conectado a la BD papu")
    }
});

