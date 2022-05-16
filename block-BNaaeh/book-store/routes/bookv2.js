var express = require('express');
var router = express.Router();
var Book = require('../model/book');
var Comment = require('../model/comment');

/* GET home page. */
router.get('/', function(req, res, next) {
  Book.find({}, (err,books) =>{
    if(err) return next(err);
    res.status(200).json(books)
  })
});

// get single book 
router.get('/:id',(req,res,next) => {
  var id = req.params.id;
  Book.findById(id, (err,book) => {
    if(err) return next(err);
    res.status(200).json(book)
  })
})

// Create book 
router.post('/', (req,res,next) => {
  Book.create(req.body, (err,book) => {
    if(err) return next(err);
    res.status(200).json(book);
  })
})

// Update book 
router.post('/:id', (req,res,next) => {
  var id = req.params.id;
  Book.findByIdAndUpdate(id,req.body,(err,book) => {
    if(err) return next(err);
    res.status(200).json(book)
  })
})

// delete book 
router.get('/:id', (req,res,next) => {
  var id = req.params.id;
  Book.findByIdAndDelete(id, (err,book) => {
    if(err) return next(err);
    res.status(200).json(book)
  })
})


module.exports = router;