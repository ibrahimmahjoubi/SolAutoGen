pragma solidity ^0.4.17;

contract First {
    address manager;
    uint places = 4;
    uint transactions = 4;
    uint[][] pre ;
    uint[][] post;
    uint[] initialMarking;
Constructor(){
manager = msg.sender;

}

function functionNumber01() public payable{
require(verifFireCondition(initialMarking[0]));

}
function functionNumber02() public {
require(verifFireCondition(initialMarking[1]));

}
function functionNumber03() private {
require(verifFireCondition(initialMarking[2]));

}

function verifFireCondition (uint t) public view returns(bool s){ 
  for (uint i=0; i<places; i++) {
      if(post[i][t] <= initalMarking[i]){ 
          s = true;
       }else {
          s = false; 
          i = places;
      }
      return s;
   }
 } 

}
