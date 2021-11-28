var fs = require('fs');
var entries = fs.readFileSync('01/input.txt').toString().split("\r\n");

var sum = 0;

entries.forEach(mass => {
    
    sum += calculateMass(mass);

});

console.log(sum);

function calculateMass(mass) {
    return Math.floor(mass/3)-2;
}