class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.lenth = 0;
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
    this.lenth++;
  }

  printAll() {
    if (!this.lenth) {
      console.log("Nothing in this linked list");
      return;
    }
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

let myLinkedList = new LinkedList();
myLinkedList.push("Blake");
myLinkedList.push("Black");
myLinkedList.push("James");
myLinkedList.push("Wayne");
myLinkedList.printAll();
