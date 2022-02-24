//Building Queue using LinkedList

class LinkedList {
  constructor() {
    this.head = null; //First element of the list
    this.tail = null; //Last element of the list
  }

  append(value) {
    const newNode = { value: value, next: null };
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = { value: value, next: null };
    if (this.head) {
      newNode.next = this.head;
    }
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  insertAfter(value, afterValue) {
    const exitingNode = this.find(afterValue);

    if (exitingNode) {
      const newNode = { value: value, next: exitingNode.next };
      exitingNode.next = newNode;
    }
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let curNode = this.head;
    while (curNode) {
      if (curNode.value === value) {
        return curNode;
      }
      curNode = curNode.next;
    }

    return null;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let curNode = this.head;
    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedItem = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedItem;
  }

  toArray() {
    const elements = [];

    let curNode = this.head;
    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }

    return elements;
  }
}

class Queue {
  constructor() {
    this.items = new LinkedList();
  }

  enqueue(value) {
    //adding items at the end
    this.items.append(value);
  }

  dequeue() {
    //removing items from start
    return this.items.deleteHead();
  }

  isEmpty() {
    return this.items.head;
  }

  toArray() {
    return this.items.toArray();
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
