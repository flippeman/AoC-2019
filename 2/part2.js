var fs = require('fs');
var entries = fs.readFileSync('2/input.txt').toString().split(",");


for (noun=0 ; noun <= 99 ; noun++) {
    for (verb=0 ; verb <= 99 ; verb++) {
        entries = fs.readFileSync('2/input.txt').toString().split(",");
        testPair(noun, verb);
    }
}

function testPair(noun, verb) {
    entries[1] = noun;
    entries[2] = verb;
    pos = 0;

    while (true) {
        if (entries[pos] == '1') {
            op1();
        } else if (entries[pos] == '2') {
            op2();
        } else if (entries[pos] == '99') {
            break;
        } else {
            console.log("Invalid opcode");
            break;
        }
        pos += 4;
    }

    if(entries[0] == "19690720") {
        console.log("noun: " + noun + "\n" + "verb: " + verb + "\n" + "100 * noun * verb = " + (100 * noun + verb));
    }
}


function op1() {
    entries[entries[pos+3]] = parseInt(entries[entries[pos+1]]) + parseInt(entries[entries[pos+2]]);
}

function op2() {
    entries[entries[pos+3]] = parseInt(entries[entries[pos+1]]) * parseInt(entries[entries[pos+2]]);
}