//1. Retry
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for(;;) {
    try {
      return primitiveMultiply(a, b);
    } catch(e) {
      if(e instanceof MultiplicatorUnitFailure) {
        console.log('80% of cases failed.')
      } else {
        throw e;
      }
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64

//2. The locked box
const box = new class {
  locked = true;
  #content = [];

  unlock() { this.locked = false; }
  lock() { this.locked = true;  }
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this.#content;
  }
};

function withBoxUnlocked(body) {
  const boxWasLocked = box.locked;
  try {
    box.unlock()
    body()
  } catch(e) {
     throw e;
  } finally {
    if(boxWasLocked) {
      box.lock();
    }
  }
}

withBoxUnlocked(() => {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(() => {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// → true
