var fs = require('fs');

// Change the content of the file as you want
// or either set fileContent to null to create an empty file
var fileHeader = "pragma solidity ^0.4.17;\n\ncontract First {\n\n}";

// The absolute path of the new file with its name
var filepath = "mynewfile.sol";

fs.writeFile(filepath, fileHeader, (err) => {
    if (err) throw err;

    console.log("The file was succesfully saved!");
});