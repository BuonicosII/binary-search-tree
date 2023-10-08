import { Node } from "./nodeclass.js";
import { buildtree } from "./buildtree.js";
import { mergeSort } from "./mergesort.js";

class Tree {
    constructor (array) {
        const sortedArray = mergeSort(array);
        this.root = buildtree(sortedArray);
    };

    insert(value) {

        function findSmallestNode(node) {
            if (node.value === value) {
                return;
            } else if (value < node.value && node.left === null) {
                node.left = new Node(value);
                return;
            } else if (value < node.value) {
                findSmallestNode(node.left);
                return;
            } else {
                findSmallestNode(node.right);
                return;
            }
        }

        findSmallestNode(this.root);
    }

    
};

export { Tree }