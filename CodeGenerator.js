var fs = require('fs');
const pn = require('./models/petrinet');

// The absolute path of the new file with its name
var filepath = "TokenGameSmartContractSimulator.sol";

/*
var generateFunctions = function(pn){
    var functions = ''
    for (var i = 0; i < pn.transitions; i++){
        functions = functions+"function T"+i+"() public {\n\n"+
        "require(verifFireCondition(initialMarking"+i+"))"+
        "}\n";
    }
    return functions;
}
*/
var generateFunctions = function(pn){
    var count = pn.tasks.length;
    console.log("***"+count+"***");
   // console.log("***"+Object.keys(pn.tasks)+"***");

    var functions = ''
    for (var i = 0; i < pn.tasks.length; i++){
        if(pn.tasks[i].public && pn.tasks[i].payable){
            functions = functions+"function "+pn.tasks[i].name+"() public payable{\n"+
        "require(verifFireCondition(initialMarking["+i+"]));\n"+
        endOfFunction();
        }else if(pn.tasks[i].public && !pn.tasks[i].payable){
            functions = functions+"function "+pn.tasks[i].name+"() public {\n"+
        "require(verifFireCondition(initialMarking["+i+"]));\n"+
        endOfFunction();
        }else{
        functions = functions+"function "+pn.tasks[i].name+"() private {\n"+
        "require(verifFireCondition(initialMarking["+i+"]));\n"+
        endOfFunction();
        }
    }
    return functions;
}
var endOfFunction = function(){
    var theEnd = "\n}\n";
    return theEnd;
}

var generateConstructor = function(){
    var constructor = "Constructor(){\n"+
    "manager = msg.sender;\n"+
    endOfFunction();
    return constructor;
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
    "    address manager;\n"+
    "    uint places = " +pn.places+ ";\n"+
    "    uint transactions = " +pn.transitions+ ";\n"+ 
    "    uint[][] pre = " +pn.pre+ ";\n"+ //[["+pn.pre[0]+"],["+pn.pre[1]+"],["+pn.pre[0]+"]];"+
    "    uint[][] post = " +pn.post+ ";\n"+
    "    uint[] initialMarking = " +pn.initialMarking+ ";\n"+
    generateConstructor()+"\n"+
    generateFunctions(pn)+"\n"+
    generateFireFunction()+

    "\n}"

    fs.writeFile(filepath, fileHeader, (err) => {
        if (err) throw err;
    
        console.log("The file was succesfully saved!");
    });
}
