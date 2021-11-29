var fs = require('fs');
var wires = fs.readFileSync('3/input.txt').toString().split("\n");

var firstWire = wires[0].split(",");
var secondWire = wires[1].split(",");


var firstWirePosition = {
    x: 0,
    y: 0
}

var firstWirePath = [{
    x: 0,
    y: 0
}];


for (var i=0 ; i < firstWire.length ; i++) {

    switch (firstWire[i][0]) {
        case 'U':
            firstWirePath = firstWirePath.concat(walkUp(firstWirePosition, parseInt(firstWire[i].slice(1))));
            break;
    
        case 'D':
            firstWirePath = firstWirePath.concat(walkDown(firstWirePosition, -1 * parseInt(firstWire[i].slice(1))));
            break;

        case 'L':
            firstWirePath = firstWirePath.concat(walkLeft(firstWirePosition, -1 * parseInt(firstWire[i].slice(1))));
            break;

        case 'R':
            firstWirePath = firstWirePath.concat(walkRight(firstWirePosition, parseInt(firstWire[i].slice(1))));
            break;
    }
}


var secondWirePosition = {
    x: 0,
    y: 0
}

var secondWirePath = [{
    x: 0,
    y: 0
}];


for (var i=0 ; i < secondWire.length ; i++) {

    switch (secondWire[i][0]) {
        case 'U':
            secondWirePath = secondWirePath.concat(walkUp(secondWirePosition, parseInt(secondWire[i].slice(1))));
            break;
    
        case 'D':
            secondWirePath = secondWirePath.concat(walkDown(secondWirePosition, -1 * parseInt(secondWire[i].slice(1))));
            break;

        case 'L':
            secondWirePath = secondWirePath.concat(walkLeft(secondWirePosition, -1 * parseInt(secondWire[i].slice(1))));
            break;

        case 'R':
            secondWirePath = secondWirePath.concat(walkRight(secondWirePosition, parseInt(secondWire[i].slice(1))));
            break;
    }
}

var intersections = firstWirePath.filter(stepFirst => secondWirePath.some(stepSecond => (stepFirst.x == stepSecond.x) && (stepFirst.y == stepSecond.y))).slice(1);

var distance = 100000000;

intersections.forEach(intersection => {
    if((Math.abs(intersection.x) +  Math.abs(intersection.y)) < distance) {
        distance = (Math.abs(intersection.x) +  Math.abs(intersection.y));
    }
});

console.log(distance);

function walkUp(pos, steps) {

    var stepsWalked = [];

    for (var step=1 ; step <= steps ; step++) {
        var newStep = {
            x: pos.x,
            y: pos.y + step
        }
        stepsWalked.push(newStep)
    }
    pos.y += steps;
    return stepsWalked;
}

function walkDown(pos, steps) {

    var stepsWalked = [];

    for (var step=-1 ; step >= steps ; step--) {
        var newStep = {
            x: pos.x,
            y: pos.y + step
        }
        stepsWalked.push(newStep)      
    }
    pos.y += steps;

    return stepsWalked;
}

function walkLeft(pos, steps) {

    var stepsWalked = [];

    for (var step=-1 ; step >= steps ; step--) {
        var newStep = {
            x: pos.x + step,
            y: pos.y
        }
        stepsWalked.push(newStep)      
    }
    pos.x += steps;

    return stepsWalked;
}

function walkRight(pos, steps) {

    var stepsWalked = [];

    for (var step=1 ; step <= steps ; step++) {
        var newStep = {
            x: pos.x + step,
            y: pos.y
        }
        stepsWalked.push(newStep)        
    }
    pos.x += steps;

    return stepsWalked;
}