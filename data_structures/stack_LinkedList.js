class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    if(this.isEmpty()) {
      this.bottom = this.top;
    }
    this.length++;
    return this;
  }
  pop() {
    if(this.isEmpty()) {
      return null;
    }
    if(this.length === 1) {
      this.bottom = null;
    }
    const topValue = this.top;
    this.top = this.top.next;
    this.length--;
    return topValue;
  }
  isEmpty() {
    if(this.length === 0) {
      return true;
    }
    return false;
  }
}

const myStack = new Stack();