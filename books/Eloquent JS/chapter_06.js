//1. Vector type
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    return new Vec(this.x + vec.x, this.y + vec.y);
  }

  minus(vec) {
    return new Vec(this.x - vec.x, this.y - vec.y);
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

//2. Groups
class Group {
  constructor() {
    this.group = [];
  }

  has(val) {
    return this.group.includes(val);
  }

  add(val) {
    if(!this.has(val)) {
      this.group.push(val);
    }
  }

  delete(val) {
    this.group = this.group.filter(ele => ele !== val);
  }

  static from(list) {
    if(typeof list[Symbol.iterator] === "function") {
      let group = new Group();
      list.map(element => group.add(element));
      return group;
    }
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
          if (index < this.group.length) {
            return { value: this.group[index++], done: false };
          } else {
            return { done: true }
          }
      }
    }
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
