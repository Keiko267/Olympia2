'use strict';
const MongoClient = require('mongodb').MongoClient;
let db;
let ObjectId = require('mongodb').ObjectID;
const Reservas = function () {
};
// Conexión a MongoDB
Reservas.prototype.connectDb = function (callback) {
    MongoClient.connect("mongodb+srv://root:root@ctm-pnet-2021-2022.j9mx6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true},
    function (err, database) {
    if (err) {
    callback(err);
    }
    db=database.db('ctm-pnet-2021-2022').collection('reservas');
    callback(err, database);
    });
    };

    // Añadir
    Reservas.prototype.add = function (reserva, callback) {
        return db.insertOne(reserva, callback);
        };

    // Recuperar
    Reservas.prototype.get = function (_id, callback) {
        return db.find({_id: ObjectId(_id)}).toArray(callback);
        };
    Reservas.prototype.getAll = function (callback) {
        return db.find({}).toArray(callback);
        };
    //Actualizar
    Reservas.prototype.update = function (_id, updatedReserva, callback) {
        delete updatedReserva._id;
        return db.updateOne(
        {_id: ObjectId(_id)}, {$set: updatedReserva}, callback);};

    //Eliminar
    Reservas.prototype.remove = function (_id, callback) {
        return db.deleteOne({_id: ObjectId(_id)}, callback);
        };
    Reservas.prototype.removeAll = function (callback) {
        return db.deleteMany({}, callback);
        };
    module.exports = new Reservas(); 