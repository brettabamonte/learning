//1. Flattening
function flatten(array) {
  arr = []
  arr = array.reduce((acc, curVal) => acc.concat(curVal))
  return arr
}

//1. Flattening tests
console.log(flatten([[1,2,3], [4,5], [6]]))
console.log(flatten([[1,2,3,4,5], [4,5,6,7], [10,12]]))

//2. Your own loop
function loop(val, testFunc, updateFunc, bodyFunc) {
  while(testFunc(val)) {
    bodyFunc(val)
    val = updateFunc(val)
  } 
}

//2. Loop tests
loop(3, n => n > 0, n => n - 1, console.log)
loop(1024, n => n > 1, n => n / 2, console.log)


//3. Everything
function every(array, testPredicate) {
  for (i = 0; i < array.length; i++) {
    if(!testPredicate(array[i])) {
      return false;
    }
  }
  return true;
}

//3. Everything tests
console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
