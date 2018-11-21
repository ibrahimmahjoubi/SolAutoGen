# SolAutoGen

## Step 1
open terminal
$ sudo service mongod start

## step 2
$ cd SolAutoGen
##
$ npm install

## step 3
$ nodemon app.js

## step 4 
##
use a http rest (postman) client to test the program with the JSON object below

#
{
	"pre":[
		[1,1,1,1],
        [0,0,0,0],
        [1,1,1,1]
         ],
         "post":[
		[1,1,1,1],
        [0,0,0,0],
        [1,1,1,1]
         ],
        "places": 4,
        "transitions": 4,
        "initialMarking": [1,1,1,1]  }
