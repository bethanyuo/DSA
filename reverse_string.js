
// Hello World

const str = "Hello World";

const strArray = [];

//string = [];

function reverse(_string) { // CANNOT use {string} as param because it is a DATATYPE ONLY
    //string.split() into an ARRAY || string.slice;
    if (_string === null || !_string || typeof _string !== "string" || _string.length < 2) {
        return;
    }
    
    for (i = _string.length - 1; i > -1; i--) {  // OR   for (i = _string.length - 1; i = 0; i--) // LOOP until i = 0
        strArray.push(_string[i]);
    }

    console.log("Reversed string ==> " + strArray.toString()); // d,l,r,o,W, ,o,l,l,e,H
    console.log("Reversed string ==> " + strArray.join(""));   // dlroW olleH
}

reverse(str);

function reverse2(_string) {
    console.log("New Reversal ==> " + _string.split("").reverse());           // d,l,r,o,W, ,o,l,l,e,H
    console.log("New Reversal ==> " + _string.split("").reverse().join(""));  // dlroW olleH
}

reverse2(str);

const reverse3 = _string => console.log(_string.split("").reverse().join(""));  // dlroW olleH
reverse3(str);

const reverse4 = _string => console.log([..._string].reverse().join(""));;      // dlroW olleH (ES6 Version - [...] = Spread Operator)
reverse4(str);
// Hello World

const str = "Hello World";

const strArray = [];

//string = [];

function reverse(_string) { // CANNOT use {string} as param because it is a DATATYPE ONLY
    //string.split() into an ARRAY || string.slice;
    if (_string === null || !_string || typeof _string !== "string" || _string.length < 2) {
        return;
    }
    
    for (i = _string.length - 1; i > -1; i--) {  // OR   for (i = _string.length - 1; i = 0; i--) // LOOP until i = 0
        strArray.push(_string[i]);
    }

    console.log("Reversed string ==> " + strArray.toString()); // d,l,r,o,W, ,o,l,l,e,H
    console.log("Reversed string ==> " + strArray.join(""));   // dlroW olleH
}

reverse(str);

function reverse2(_string) {
    console.log("New Reversal ==> " + _string.split("").reverse());           // d,l,r,o,W, ,o,l,l,e,H
    console.log("New Reversal ==> " + _string.split("").reverse().join(""));  // dlroW olleH
}

reverse2(str);

const reverse3 = _string => console.log(_string.split("").reverse().join(""));  // dlroW olleH
reverse3(str);

const reverse4 = _string => console.log([..._string].reverse().join(""));;      // dlroW olleH (ES6 Version - [...] = Spread Operator)
reverse4(str);