class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      return null;
    } else if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.length = 0;
      return temp;
    }
    let currentNode = this.head;
    for (let i = 1; i <= this.length - 2; i++) {
      currentNode = currentNode.next;
    }
    let temp = currentNode.next;
    currentNode.next = null;
    this.length--;
    return temp;
  }

  print() {
    if (!this.length) {
      console.log("No element is this list");
      return;
    }
    let currentNode = this.head;
    while (currentNode) {
      console.log("value-", currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

let stack = new Stack();
stack.push("Blake");
stack.push("Ben");
stack.pop();
stack.push("Joel");
stack.print();
