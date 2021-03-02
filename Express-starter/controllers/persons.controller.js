const express = require('express')
const persons = require('../models/persons.model')

const personsController = {}
personsController.get = function(req,res){
    persons.find()
        .then(r => res.send(r))
        .catch(e => res.status(500).send('GET error in Person: ' + e))
}

personsController.post = function(req,res){
    newPersons = new persons(req.body)
    newPersons.save()
        .then(r => res.send(r))
        .catch(e => res.status(500).send('POST error in Person: ' + e))
}
personsController.delete = (req, res) => {
    persons.findById(req.params.id)
        .then(r => persons.remove(persons.findById(req.params.id))
                        .then(r1 => res.send(r)))
        .catch(e => res.status(500).send('DELETE error in Person: ' + e));
};

//PATCH: find and change properties of Persons document by ID
personsController.patch = (req, res) => {
    persons.findById(req.params.id)
        .then(r => {
            Object.keys(req.body).forEach((key, i) => {
                r[key] = req.body[key];
            });
            r.save()
                .then(r => res.send(r));
        }).catch(e => res.status(500).send('PATCH error in Person: ' + e));
};

module.exports = personsController