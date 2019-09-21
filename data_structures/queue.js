class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.last = newNode;
      this.first = this.last;
    }
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if(this.length === 0) {
      return null;
    }
    const firstNode = this.first;
    this.first = this.first.next;
    if(this.length === 1) {
      this.last = null;
    }
    this.length--;
    return firstNode;
  }
}

const myQueue = new Queue();