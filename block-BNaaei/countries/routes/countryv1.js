var express = require('express');
var router = express.Router();
var Country = require('../model/countrey');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// ascending Order
router.get('/ascending', (req,res,next) => {
  var mysort = {length:1};
  Country.find().sort(mysort).toArray((err,result) => {
    res.status(200).json(result);
  })
})

// descending Order 

router.get('/descending', (req,res,next) => {
  var mysort = {length:1};
  Country.find().sort(mysort).toArray((err,result) => {
    res.status(200).json(result);
  })
})

// Edit country
router.post("/:id/edit", (req,res,next) => {
  var id = req.params.id;
  Country.findByIdAndUpdate(id, req.body, (err,result) => {
    res.status(200).json(result);
  })
})

// delete country 
router.get("/:id/delete", (req,res,next) => {
  var id = req.params.id;
  Country.findByIdAndDelete(id, (err,result) => {
    res.status(200).json(result);
  })
})


module.exports = router;