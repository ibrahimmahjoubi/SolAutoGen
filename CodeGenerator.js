var fs = require('fs');
const pn = require('./models/petrinet');

// The absolute path of the new file with its name
var filepath = "mynewfile.sol";

var generateFunctions = function(pn){
    var functions = ''
    for (var i = 0; i < pn.transitions; i++){
        functions = functions+"function T"+i+"() public {\n\n   }\n";
    }
    return functions;
}

var generateFireFunction = function(){
    var fireFunction = "function verifFireCondition (uint t) public view returns(bool s){ \n"+
             "  for (uint i=0; i<places; i++) {\n"+ 
             "      if(post[i][t] <= initalMarking[i]){ \n"+
             "          s = true;\n "+
             "      }else {\n"+ 
             "          s = false; \n"+
             "          i = places;\n" +
             "      }\n" +
             "      return s;\n "+
             "  }\n"+
             " } \n";
    console.log(fireFunction);
    return fireFunction;
}

module.exports.CG = function (pn){
    var fns = generateFunctions(pn);
    
    var fileHeader = "pragma solidity ^0.4.17;\n\ncontract First {\n"+
    "   const uint places = " +pn.places+ ";\n"+
    "   const uint transactions = " +pn.transitions+ ";\n"+ 
    "   const uint[][] pre = " +pn.pre+ ";\n"+ //[["+pn.pre[0]+"],["+pn.pre[1]+"],["+pn.pre[0]+"]];"+
    "   const uint[][] post = " +pn.post+ ";\n"+
    "   const uint[] initialMarking = " +pn.initialMarking+ ";\n"+generateFunctions(pn)+"\n"+
    generateFireFunction()+
    "\n}"

    fs.writeFile(filepath, fileHeader, (err) => {
        if (err) throw err;
    
        console.log("The file was succesfully saved!");
    });
}
