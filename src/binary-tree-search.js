import { Tree } from "./treeclass"


let tree = new Tree ([7, 8 ,3, 5, 2, 1, 9, 4, 6, 90, 56, 34, 22, 23, 11]);


const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

prettyPrint(tree.root);

tree.insert(19);

prettyPrint(tree.root);

tree.remove(19);

prettyPrint(tree.root);
