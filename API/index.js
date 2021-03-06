// OLYMPIAPI
//Dependencias y plugins
const express = require('express'); 
const app = express();
const logger = require('morgan');
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const baseAPI = '/api/v1';
const cors = require('cors');
app.use(cors());


// Antes del código -- parser
app.use(bodyParser.json());

app.use(logger('dev'));

app.use(bodyParser.urlencoded({
    extended: true
}));

// Ruta: Reservas

const reservasService = require('./routes/reservas-service');
const reservas = require('./routes/reservas');
app.use('/reservas', reservas);

//Creación del server y conexión a mongoDB
const server = http.createServer(app);

reservasService.connectDb(function (err) {
    if (err) {
        console.log('Could not connect with MongoDB – reservasService');
        process.exit(1);
    }
    server.listen(PORT, function () {
        console.log('Server up and running on localhost:' + PORT);
    });
});
