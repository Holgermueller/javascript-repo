'use strict';

const testArray = [1, 2, 3, 4, 5];

const mappedArray = testArray.map(function(elem) {
  return elem + 1;
});

console.log(testArray);
console.log(mappedArray);

//filter only returns elem that meet test conditions
// % (returns remainder of division operation)
const filteredArray = mappedArray.filter(function(elem) {
  return elem % 2 === 0;
});

console.log('filteredArray', filteredArray);

//.reduce

const reducedArray = filteredArray.reduce(function(acc, elem) {
  return acc + elem;
}, 0);

console.log('reducedArray', reducedArray);


