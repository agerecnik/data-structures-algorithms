class Stack {
  constructor(){
    this.data = [];
  }
  peek() {
    return this.data[this.data.length-1];
  }
  push(value) {
    this.data.push(value);
    return this.data;
  }
  pop() {
    return this.data.pop();
  }
}

const myStack = new Stack();