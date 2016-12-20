'use strict';

var lastIn1;
var lastIn2;
var lastArr =[];

function swap (arr, in1, in2) {
  let temp = arr[in1];
  lastIn1 = in1;
  lastIn2 = in2;
  lastArr= arr;
  arr[in1] = arr[in2];
  arr[in2] = temp;
  return arr;
}

function undoLastSwap () {
  let temp = lastArr[lastIn1];
  lastArr[lastIn1] = lastArr[lastIn2];
  lastArr[lastIn2] = temp;
  return lastArr;
}

function reverse (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i !== (arr.length-1)) {
      for (let j = (i+1); j < arr.length; j++) {
        if (arr[j] > arr[i]) {
          arr = swap(arr, i, j);
        }
      }
    }
  }
  return arr;
}

function reverseArray (arr) {
  for (let i = 0;i < (arr.length/2); i++) {
    var q = ((arr.length - 1) - i);
    if (i !== q) {
      arr = swap(arr, i, q);
    }
  }
  return arr;
}

var testArray = [0, 1, 2, 3, 5, 7, 11, 13];

console.log(swap(testArray, 3, 6));
console.log(undoLastSwap());
console.log(reverse(testArray));

var otherArray = ['house cat', 'coat rack', 'extroverted budbugs', 'displaced uber drivers', 'special occasions'];

console.log(swap(otherArray, 2, 4));
console.log(undoLastSwap());

console.log(testArray);
console.log(reverseArray(testArray));

console.log(otherArray);
console.log(reverseArray(otherArray));
