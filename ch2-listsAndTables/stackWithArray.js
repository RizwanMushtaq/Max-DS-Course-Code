//Stack data structure
//Why we want to built it - we already have array data structure with push and pop
//Simply to restrict the user, ensure we have only stack options only

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toArray() {
    return this.items.slice();
  }
}

const stack = new Stack();
stack.push("cook dinner");
stack.push("Wash the dishes");
stack.push("Buy incredients");

console.log(stack.toArray());

console.log(stack.pop());

console.log(stack.toArray());
