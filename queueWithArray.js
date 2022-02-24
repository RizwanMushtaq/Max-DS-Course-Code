//Building Queue With Array
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.unshift(value); //Adding items at start of the queue
  }

  dequeue() {
    return this.items.pop(); //removing items from end of queue
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toArray() {
    return this.items.slice();
  }
}

const queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");

console.log(queue.toArray());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.toArray());
