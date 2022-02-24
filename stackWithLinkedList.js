//Building Stack using LinkedList

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

//Using Above Linked List to create stack
class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.deleteHead();
  }

  isEmpty() {
    return !this.list.head;
  }

  toArray() {
    return this.list.toArray();
  }
}

const stack = new Stack();
stack.push("cook dinner");
stack.push("Wash the dishes");
stack.push("Buy incredients");

console.log(stack.toArray());

console.log(stack.pop());

console.log(stack.toArray());
