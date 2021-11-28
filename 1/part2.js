var fs = require('fs');
var entries = fs.readFileSync('1/input.txt').toString().split("\r\n");


var sum = 0;

entries.forEach(mass => { sum += calculateMass(mass); });

console.log(sum);


function calculateMass(mass) {   
    var fuel = Math.floor(mass/3)-2;
    return fuel <= 0 ? 0 : fuel + calculateMass(fuel); 
}