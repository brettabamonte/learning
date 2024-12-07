//1. Sum of range
function range(start, end, step) {
  arr = []
  inc = step ? step : 1;
  for (i = start; start <= end ? i <= end : i >= end; i += inc) {
    arr.push(i);
  } 
  return arr;
}

function sum(arr) {
  return arr.reduce((acc, cur) => acc + cur)
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

//2. Reverse array
function reverseArray(array) {
  newArr = []
  for (i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}

function reverseArrayInPlace(array) {
  for(i = 0, j = array.length - 1; i < j; i++, j--) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

//2. tests
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


//3. Array to List
function arrayToList(array) {
  if(array.length === 0) {
    return null
  }
  return {value: array[0], rest: arrayToList(array.slice(1, array.length))}
}

function listToArray(list) {
  if(list === null) {
    return []
  }
  return [list.value].concat(listToArray(list.rest))
}

function prepend(val, list) {
  return { value: val, rest: list }
}

function nth(list, pos) {
  if(list === null) {
    return undefined
  }
  if(pos === 0) {
    return list.value
  }
  return nth(list.rest, pos - 1)
}
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nth(arrayToList([10, 20, 30]), 4));
// → undefined


//4. Deep comparison
function deepEqual(x, y) {
  if(x == null && y == null) {
    return true
  }
}
