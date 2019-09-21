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

  breadthFirstSearch() { //normally implemented with iterative approach
    let currentNode = this.root;
    let list = [];
    let queue = []; //constantly adding new children to the queue can become a memory problem
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
  breadthFirstSearchRecursive(queue, list) {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchRecursive(queue, list);
  }

  depthFirstSearchInOrder() { //memory consumption is O(height of the tree), the height of the tree matches the deepest recursive function (call stack)
    function traverseInOrder(node, list) {
      if (node.left) {
        traverseInOrder(node.left, list);
      }
      list.push(node.value);
      if (node.right) {
        traverseInOrder(node.right, list);
      }
      return list;
    }
    return traverseInOrder(this.root, []);
  }
  depthFirstSearchPostOrder() {
    function traversePostOrder(node, list) {
      if (node.left) {
        traversePostOrder(node.left, list);
      }
      if (node.right) {
        traversePostOrder(node.right, list);
      }
      list.push(node.value);
      return list;
    }
    return traversePostOrder(this.root, []);
  }
  depthFirstSearchPreOrder() {
    function traversePreOrder(node, list) {
      list.push(node.value);
      if (node.left) {
        traversePreOrder(node.left, list);
      }
      if (node.right) {
        traversePreOrder(node.right, list);
      }
      return list;
    }
    return traversePreOrder(this.root, []);
  }
}

function validateBST(tree) { //BST validation implemented with BFS
  let currentNode = tree.root;
  let list = [];
  let queue = [];
  queue.push(currentNode);

  while (queue.length > 0) {
    currentNode = queue.shift();
    if(currentNode.left !== null) {
      if (currentNode.left.value >= currentNode.value) {
        return false;
      }
    }
    if (currentNode.right !== null) {
      if (currentNode.right.value <= currentNode.value) {
        return false;
      }
    }
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return true;
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

tree.breadthFirstSearch();
tree.breadthFirstSearchRecursive([tree.root], []);