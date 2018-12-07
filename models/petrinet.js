const mongoose = require('mongoose');
const config = require('../config/database');
var Schema = mongoose.Schema;

var task = new Schema({ name: String,
                        public: Boolean,
                        payable: Boolean });
// PentriNet Schema
const petriNetSchema = mongoose.Schema({
pre: {
    type: [[Number]],
    required: true
},
post: {
    type: Array,
    required: true
},
places: {
    type: Number,
    required: true
},
transitions: {
    type: Number,
    required: true
},
initialMarking: {
    type: Array,
    required: true
},
tasks: Array
});
const Pn = module.exports = mongoose.model('Pn', petriNetSchema);

module.exports.addPn = function(newPn, callback){
    console.log(newPn.pre);
    newPn.save(callback);

    //var pNet = new petriNet();
    //pNet.pre = newPn.pre; // The setter will be used automatically here.
    //console.log(newPn.pre+"*/*/*---*/**");
    //pNet.sayHello(); // Will output 'Hello, my name is Martin, I have ID: id_1'
    //console.log(pNet.sayHello());
}
