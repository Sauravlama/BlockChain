
const SHA256 = require("crypto-js/sha256");
const dataObject = {
    id:1,
    body: "Hey this is my transaction",
    time: new Date().getTime.toString()
};
const data1= "Blockchain Rock!";
function generateHash(obj) {
	// Write your code here
  return (SHA256(JSON.stringify(obj)))
}

console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("************************************");
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);