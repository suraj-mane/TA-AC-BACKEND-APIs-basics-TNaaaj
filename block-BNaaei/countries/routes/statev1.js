var express = require('express');
var router = express.Router();
var State = require("../model/states");

// list state in decending order
router.get('/sort/descending', function(req, res, next) {
  State.find({}).populeate("country").populeate("neighbouring_states").sort({population:-1}).exec((err,result) => {
    res.status(200).json({result});
  })
});

// list state in ascending order 
router.get("/sort/ascending",(req,res,next) =>{
  State.find({}).populeate("country").populeate("neighbouring_states").sort({population:1}).exec((err,result) => {
    res.status(200).json({result});
  })
})

// list particular state, list all neighbouring states
router.get("/:id", (req,res,next) => {
  State.findById(req.params.id).populeate("country").populeate("neighbouring_states").exec((err,result) => {
    if(err) return next(err);
    res.status(200).json({result});
  })
})

// update  state 
router.post("/:id", (req,res,next) => {
  State.findByIdAndUpdate(req.params.id, req.body,(err, result) => {
    if(err) return next(err);
    res.status(200).json({result});
  })
})

// Remove state 
router.get("/:id", (req,res,next) => {
  State.findByIdAndDelete(req.params.id, (err,result) => {
    if(err) return next(err);
    res.status(200).json({result});
  })
})
module.exports = router;