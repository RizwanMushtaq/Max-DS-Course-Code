//custom data structure - Linked List
//We are going to build our custom object here
//For builtin datastructures sets and maps, we also create them using new Map, new Set

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

const LinkedList1 = new LinkedList();
LinkedList1.append(1);
LinkedList1.append("Hallo");

LinkedList1.prepend(10);
LinkedList1.prepend("Hi");

console.log(LinkedList1.toArray());

LinkedList1.delete("Hallo");

console.log(LinkedList1.toArray());

console.log(LinkedList1.find("Hi"));

LinkedList1.insertAfter(100, 10);

console.log(LinkedList1.toArray());
