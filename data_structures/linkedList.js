class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printList();
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if(index >= this.length) {
      return this.append(value);
    }
    if(index === 0) {
      return this.prepend(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    const leader = this.traverseToIndex(index-1);
    const nodeToRemove = leader.next;
    leader.next = nodeToRemove.next;
    this.length--;
    return this.printList();
  }
  reverse() {
  	if(!this.head.next) {
  		return this.head;
  	}
  	let nextNode = this.head
  	let currentNode = {};
  	let previousNode = null;
  	for (let i = 0; i < this.length; i++) {
  		currentNode = nextNode;
  		nextNode = nextNode.next;
  		currentNode.next = previousNode;
  		previousNode = currentNode;
  		if (i === 0) {
  			this.tail = currentNode;
  		}
  	}
  	this.head = currentNode;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);