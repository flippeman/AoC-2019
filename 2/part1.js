var fs = require('fs');
var entries = fs.readFileSync('2/input.txt').toString().split(",");

pos = 0;

while (true) {
    if (entries[pos] == '1') {
        op1();
    } else if (entries[pos] == '2') {
        op2();
    } else if (entries[pos] == '99') {
        console.log("Finished");
        break;
    } else {
        console.log("Invalid opcode");
        break;
    }
    pos += 4;
}

console.log(entries);
console.log(entries[0]);


function op1() {
    entries[entries[pos+3]] = parseInt(entries[entries[pos+1]]) + parseInt(entries[entries[pos+2]]);
}

function op2() {
    entries[entries[pos+3]] = parseInt(entries[entries[pos+1]]) * parseInt(entries[entries[pos+2]]);
}