class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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

  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    }
    let currentHead = this.head;
    newNode.next = currentHead;
    this.head = newNode;
    this.length++;
    return this.length;
  }

  insertAt(index, value) {
    if (index > this.length || index < 0) {
      return null;
    } else if (index === 0) {
      this.unshift(value);
      return;
    } else if (index === this.length) {
      this.push(value);
      return;
    }
    let currentNode = this.head;
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
    let newNode = new Node(value);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return;
  }

  removeAt(index) {
    if (index >= this.length || index < 0) {
      return null;
    } else if (index === 0) {
      let result = this.shift();
      return result;
    } else if (index === this.length - 1) {
      let result = this.pop();
      return result;
    }
    let currentNode = this.head;
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
    let removedNode = currentNode.next;
    currentNode.next = currentNode.next.next;
    this.length--;
    return removedNode;
  }

  get(index) {
    if (index >= this.length || index < 0) {
      return null;
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
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

let linkedList = new LinkedList();
linkedList.push("Blake");
linkedList.push("test");
linkedList.push("white");
linkedList.push("James");
linkedList.push("Wayne");
linkedList.print();
let getNode = linkedList.get(4);
console.log("getNode", getNode);
