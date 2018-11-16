const express = require('express');
const router = express.Router();
const Pn = require('../models/petrinet');

router.post('/matrix', (req, res, next)=>{
  let newPetriNet = new Pn({
    pre: req.body.pre
  });
Pn.addPn(newPetriNet, (err, pn)=>{
   if(err){
     res.json({success: false, msg:'failed to register Petri Net'});
   }else{
    res.json({success: true, msg:'Petri Net Registred'});
   }
});

});
router.get('/matrix', (req, res, next)=>{
  res.send('AAAAaa');
});

module.exports = router;