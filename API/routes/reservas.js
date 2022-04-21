'use strict';
const express = require('express');
const router = express.Router();
const reservasService = require('./reservas-service');



router.get('/', function (req, res) {
    reservasService.getAll((err, reservas) => {
        if (err) {
            res.status(500).send({ //Error interno
                msg: err
            });
        } else if (reservas.length == 0) { // No hay a rray de reservas
            res.status(500).send({
                msg: "No hay reservas"
            });
        } else {
            res.status(200).send(reservas); // Envía las reservas
        }
    }
    );
});

router.post('/', function (req, res) {
    let reserva = req.body;
    reservasService.add(reserva, (err, reserva) => {
        if (err) {
            res.status(500).send({ // Error interno
                msg: err
            });
        } else if (reserva.length != 0) {
            res.status(201).send({
                msg: 'Se ha creado una reserva!' 
            });
        }
    }
    );
});

router.delete('/', function (req, res) {
    reservasService.removeAll((err) => {
        if (err) {
            res.status(500).send({ // Error interno
                msg: err
            });
        } else {
            res.status(200).send({
                msg: 'Se han borrado todas las reservas!' 
            });
        }
    });
});

router.get('/:_id', function (req, res) {
    let _id = req.params._id;
    reservasService.get(_id, (err, reserva) => {
        if (err) {
            res.status(500).send({ // Error interno
                msg: err
            });
        } else if (reserva.length == 0) {
            res.status(500).send({
                msg: "No existe esa reserva"
            });
        } else {
            res.status(200).send(reserva);
        }
    }
    );
});

router.put('/:_id', function (req, res) {
    const _id = req.params._id;
    const updatedReserva = req.body;
    reservasService.update(_id, updatedReserva, (err,
        numUpdates) => {
        if (err) {
            res.status(500).send({ msg: err }); // Error interno
        } 
        else if (numUpdates.modifiedCount === 0) {
            res.status(500).send({
                msg: "No existe esa reserva" // Si no se ha modificado ninguna
            });
        } else {
            res.status(200).send({
                msg: 'Se ha actualizado la reserva!'
            });
        }
    });
});

router.delete('/:_id', function (req, res) {
    let _id = req.params._id;
    reservasService.remove(_id, (err,
        result) => {
        if (err) {
            res.status(500).send({ msg: err }); // Error interno
        } 
        else if (result.deletedCount !== 1) {
            res.status(500).send({
                msg: "No existe esa reserva" // No se ha eliminado ninguna reserva
            });
        } else {
            res.status(200).send({
                msg: 'Se ha borrado la reserva!'
            });
        }
    });
});



module.exports = router;