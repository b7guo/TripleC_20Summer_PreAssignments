var express = require('express');
var router = express.Router();
const personsController = require('../controllers/persons.controller')

/* test GET request. */
router.get('/', function(req, res, next) {
  res.send("Get successfully")
});

router.get('/all', (req, res) => {
    personsController.get(req, res)
    
})

router.post('/new', (req, res) => {
    personsController.post(req, res)
})

router.patch('/patch/:id', (req, res)=> {
    personsController.patch(req, res, req.params.id)
})

router.delete('/delete/:id', (req, res)=> {
    personsController.delete(req, res, req.params.id)
})


module.exports = router;