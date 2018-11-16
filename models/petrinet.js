const mongoose = require('mongoose');
const config = require('../config/database');

// PentriNet Schema
const petriNetSchema = mongoose.Schema({
pre: {
    type: Array,
    required: true
},
post: {
    type: Array,
    //required: true
},
places: {
    type: String,
    //required: true
},
transitions: {
    type: String,
    //required: true
},
initialMarking: {
    type: String,
    //required: true
}
});
const Pn = module.exports = mongoose.model('Pn', petriNetSchema);

module.exports.addPn = function(newPn, callback){
    newPn.save(callback);
}