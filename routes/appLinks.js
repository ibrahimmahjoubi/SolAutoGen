const express = require('express');
const router = express.Router();
const Pn = require('../models/petrinet');
const codeGen = require('../CodeGenerator');

router.post('/matrix', (req, res, next)=>{
  let newPetriNet = new Pn({
    pre: req.body.pre,
    post: req.body.post,
    places: req.body.places,
    transitions: req.body.transitions,
    initialMarking: req.body.initialMarking,
    tasks: req.body.tasks
  });
Pn.addPn(newPetriNet, (err, pn)=>{
   if(err){
     res.json({success: false, msg:'failed to register Petri Net'});
     console.log(err);
   }else{
    res.json({success: true, msg:'Petri Net Registred'});
    console.log(newPetriNet.pre);
    codeGen.CG(newPetriNet);
   }
});

});
router.get('/matrix', (req, res, next)=>{
  res.send('AAAAaa');
});

module.exports = router;
