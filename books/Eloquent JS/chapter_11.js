//3. Building Promise.All
function Promise_all(array) {
  let res = new Array(array.length);
  let counter = 0;
  return new Promise((resolve, reject) => {
    for(let i = 0; i < array.length; i++) {
      array[i]
        .then(val => {
          res[i] = val;
          counter += 1;
          if(counter == array.length) {
            resolve(res);
          }
        })
        .catch(err => reject(err))
    } 
  });
}

// Test code.
Promise_all([]).then(array => {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), soon(2), soon(3), Promise.reject(4)])
  .then(array => {
  console.log("This should be [1, 2, 3]:", array);
  })
  .catch(err => console.log("Error ocurred resolving value: " + err));

Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then(array => {
    console.log("We should not get here");
  })
  .catch(error => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    }
  });
