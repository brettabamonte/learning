//1. Minimum
function min(x, y) {
  return x < y ? x : y;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//2. Recursion
function isEven(x) {
  if(x === 0 || x === 2 || x === -2) {
    return true;
  }
  if(x === 1 || x === -1) {
    return false;
  }
  return isEven(x - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//3. Bean Counting
function countBs(str) {
  sum = 0;
  for(i = 0; i < str.length; i++) {
    if (str[i] === "B") {
      sum += 1;
    }
  }
  return sum;
}
function countChar(str, char) {
  sum = 0;
  for(i = 0; i < str.length; i++) {
    if (str[i] === char) {
      sum += 1;
    }
  }
  return sum;
}

console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
