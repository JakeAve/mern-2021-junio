class BTNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function buscarSitio(newNode, existingNode) {
  if (newNode.val < existingNode.val) {
    if (existingNode.left === null) existingNode.left = newNode;
    else buscarSitio(newNode, existingNode.left);
  } else if (newNode.val > existingNode.val) {
    if (existingNode.right === null) existingNode.right = newNode;
    else buscarSitio(newNode, existingNode.right);
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  añadir(node) {
    if (this.root === null) {
      this.root = node;
      return;
    }
    buscarSitio(node, this.root);
  }

  buscar() {}

  remover() {}
}

const b = new BST();

const _50 = new BTNode(50);
const _21 = new BTNode(21);
const _106 = new BTNode(106);
const _120 = new BTNode(120);
const _60 = new BTNode(60);

b.añadir(_50);
b.añadir(_21);
b.añadir(_106);
b.añadir(_120);
b.añadir(_60);

console.table({ b, _50, _21, _106, _120, _60 });
console.log(b.root.right.val);
