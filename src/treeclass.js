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
    };

    remove(value) {
        
        function deleteNode(node, value) {
            if (node.value === value) {
                
            }
        }
    
        }
    };

export { Tree }

//first try at remove node
/*function findNodeToRemove(node) {
           
    //base case: if either node.left or node.right are leaf nodes and none equals the value, return. The value has not been found.
    if (node.left.left === null && 
        node.left.right === null && 
        node.right.left === null && 
        node.right.right === null &&
        node.left.value !== value && 
        node.right.value !== value) {
            return;
    //if node.left equals the value
    } else if (node.left.value === value) {
        //if it's a leaf node
        if (node.left.left === null && node.left.right === null) {
            node.left === null;
            return;
        //if node left has a left child
        } else if (node.left.left !== null && node.left.right === null) {
            node.left === node.left.left;
            return;
        //if node left has a right child
        } else if (node.left.left === null && node.left.right !== null){
            node.left = node.left.right;
            return;
        //if node left has both a right and a left child 
        }  else if (node.left.left !== null && node.left.right !== null) {
            //find the node whose left child is the smalle bigger number in relation to node.left
           let newValue = node.left.right;

           if (newValue.left === null) {
            node.left.value = newValue.value;
            node.left.right = node.left.right.right;
           }

           while (newValue.left !== null) {
            newValue = newValue.left
           }
        }
    //if node.right equals the value
    } else if (node.right === value) {
        //if it's a leaf node
        if (node.right.left === null && node.right.right === null) {
            node.right = null;
            return;
        //if node right has a left child
        } else if (node.right.left !== null && node.right.right === null) {
            node.right === node.right.left;
            return;
        //if node right has a right child
        } else if (node.right.left === null && node.right.right !== null){
            node.right = node.right.right;
            return; 
        }
    } else if (value > node.value) {
        findNodeToRemove(node.right);
    } else {
        findNodeToRemove(node.left)
    }
    //if value to remove > current node recursively call funtion on the right branch

    //if value to remove > current node recurisvely call function on left branch
    }
    findNodeToRemove(this.root)
    */