class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        else {
          currentNode = currentNode.left;
        }
      }
      else if (newNode.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        else {
          currentNode = currentNode.right;
        }
      }
      else {
        break;
      }
    }
  }
  lookup(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
      else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }
  remove(value) {
    let currentNode = this.root;
    let previousNode = null;
    let left = false;
    while (currentNode) {
      if (currentNode.value === value) {
        if (!currentNode.left && !currentNode.right) {
          if (left) {
            previousNode.left = null;
            return this;
          }
          previousNode.right = null;
          return this;
        }
        else if (!currentNode.left) {
          if (left) {
            previousNode.left = currentNode.right;
            return this;
          }
          previousNode.right = currentNode.right;
          return this;
        }
        else if (!currentNode.right) {
          if (left) {
            previousNode.left = currentNode.left;
            return this;
          }
          previousNode.right = currentNode.left;
          return this;
        }
        else if (currentNode.left && currentNode.right){
          const nodeToRemove = currentNode;
          const parentNode = previousNode; //parent of nodeToRemove
          previousNode = currentNode;
          currentNode = nodeToRemove.right;
          while (true) {
            if (!currentNode.left) {
              if (left) {
                if (previousNode !== nodeToRemove) {
                  previousNode.left = currentNode.right;
                  currentNode.left = nodeToRemove.left;
                  currentNode.right = nodeToRemove.right
                }
                else {
                  currentNode.left = nodeToRemove.left;
                }
                parentNode.left = currentNode;
                return this;
              }
              if (previousNode !== nodeToRemove) {
                previousNode.left = currentNode.right;
                currentNode.left = nodeToRemove.left;
                currentNode.right = nodeToRemove.right
              }
              else {
                currentNode.left = nodeToRemove.left;
              }
              parentNode.right = currentNode;
              return this;
            }
            previousNode = currentNode;
            currentNode = currentNode.left;
          }
        }
      }
      if (value < currentNode.value) {
        previousNode = currentNode;
        currentNode = currentNode.left;
        left = true;
      }
      else {
        previousNode = currentNode;
        currentNode = currentNode.right;
        left = false;
      }
    }
    return null;
  }
}

const tree = new BinarySearchTree();
tree.insert(52)
tree.insert(44)
tree.insert(77)
tree.insert(82)
tree.insert(53)
tree.insert(56)
tree.insert(83)
JSON.stringify(traverse(tree.root))

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}