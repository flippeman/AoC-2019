var fs = require('fs');
var range = fs.readFileSync('4/input.txt').toString().split("-");
var currentNum = parseInt(range[0]);
var highRange = parseInt(range[1]);


var validNums = [];

while (currentNum < highRange) {


    if (isNumValid(currentNum)) {
        validNums.push(currentNum);
        currentNum++;
    } else {
        currentNum = nextValidNum(currentNum);
    }

}

console.log(validNums.length);




//Helper functions

function nextValidNum(num) {
    var numString = num.toString();
    var nextNum = numString[0];
    var newDigit = 0;

    for(var i=1 ; i<numString.length ; i++) {

        if(parseInt(numString[i]) < parseInt(numString[i-1])) {
            newDigit = (parseInt(numString[i]) + (parseInt(numString[i-1]) - parseInt(numString[i]))).toString();
            for (i ; i <numString.length ; i++) {
                nextNum += newDigit;
            }
            
        } else {
            nextNum += numString[i];
        }
    }

    if(nextNum == numString) {
        nextNum = (parseInt(nextNum) + 1).toString();
    }
    return parseInt(nextNum);
}

function isNumValid(num) {
    var numString = num.toString();
    
    var prevNum = numString[0];
    var sizeAscending = [...numString.slice(1)].every(function (digit) {
        var validity = (digit >= prevNum);
        prevNum = digit;
        return validity;
      });

    prevNum = numString[0];
    var hasDouble = [...numString].slice(1).some(function (digit) {
        var validity = digit == prevNum;
        prevNum = digit;
        return validity;
      });

    return (sizeAscending && hasDouble);
}