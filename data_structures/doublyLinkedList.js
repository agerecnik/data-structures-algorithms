class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      previous: null,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.previous = newNode;
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
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    newNode.previous = leader;
    follower.previous = newNode;
    this.length++;
    return this.printList()
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
    const newFollower = nodeToRemove.next;
    leader.next = nodeToRemove.next;
    newFollower.previous = leader;
    this.length--;
    return this.printList()
  }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);