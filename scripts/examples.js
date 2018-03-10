'use strict';

const testArray = ['bob', 'sue', 'harry'];
 //console.log(testArray[0]);

/*for (var i = 0; i < testArray.length; i++) {
    console.log(testArray[i]);
}*/

/*let j = 0;
while ( j < testArray.length) {
    console.log(testArray[j]);
    j++
}*/

let newArray = [];

//itterates over array
testArray.forEach(function(element) {
  console.log(`${element} is super kewl`);
});

console.log(newArray);

//map returns a new array
const newerArray = testArray.map(function(elem) {
  return elem +1;
});

console.log(newerArray);
