class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
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

  shift() {
    if (!this.head) {
      return null;
    } else if (this.length === 1) {
      this.head = null;
      this.length = 0;
    }
    let headNode = this.head;
    this.head = headNode.next;
    this.length--;
    return headNode;
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

let queue = new Queue();
queue.push("Blake");
queue.push("Ben");
queue.push("Owen");
queue.shift();
queue.print();
