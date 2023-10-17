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
            if (node === null) {
                return node;
            }

            if (value > node.value) {
                node.right = deleteNode(node.right, value);
            } else if (value < node.value) {
                node.left = deleteNode(node.left, value);
            } else {
                if (node.left === null) {
                    return node.right;
                } else if (node.right === null) {
                    return node.left;
                } else {
                    let newValue = node.right;
                    while (newValue.left !== null) {
                        newValue = newValue.left;
                    }
                    
                    deleteNode(node.right, newValue.value);
                    node.value = newValue.value;
                    return node;
                } 
            }
            return node;
        }

            deleteNode(this.root, value)

        }

    find(value) {

        function findNode(node, value) {
            if (node === null) {
                return "Not found";
            } else if (value > node.value) {
                return findNode(node.right, value);
            } else if (value < node.value) {
                return findNode(node.left, value);
            } else {
                return node;
            }
        }

        return findNode(this.root, value);
    }

    levelOrder(someFunction) {
        /*
        //iterative solution
        let queue = [];
        const secondQueue = []
        queue.push(this.root); 
        if (someFunction === undefined) {
            secondQueue.push(this.root);
            while (queue.length > 0) {
                if (queue[0].left !== null) {
                    queue.push(queue[0].left);
                    secondQueue.push(queue[0].left);
                } 
                if (queue[0].right !== null) {
                    queue.push(queue[0].right);
                    secondQueue.push(queue[0].right);
                } 
                queue = queue.slice(1)
            }

            return secondQueue;
        } else {
            while (queue.length > 0) {
                someFunction(queue[0]);
                if (queue[0].left !== null) {
                    queue.push(queue[0].left)
                } 
                if (queue[0].right !== null) {
                    queue.push(queue[0].right)
                } 
                queue = queue.slice(1)
            }
        }
        */
       //recursive solution
       function levelOrderTraversal(node, someFunction, queue = [], array = []) {
            if (someFunction === undefined) {
                if (node === null) {
                    return;
                } else {

                    array.push(node)
                    
                    queue.push(node.left);
                    queue.push(node.right);

                    while (queue.length > 0) {
                        let nextNode = queue[0];
                        queue.shift();
                        levelOrderTraversal(nextNode, undefined, queue, array)

                    }
                    return array;
                }
            } else {
                if (node === null) {
                    return;
                } else {

                    someFunction(node)
                    
                    queue.push(node.left);
                    queue.push(node.right);

                    while (queue.length > 0) {
                        let nextNode = queue[0];
                        queue.shift();
                        levelOrderTraversal(nextNode, someFunction, queue, array)

                    }
                    return array;
                }
            }
            
        
        }
        return levelOrderTraversal(this.root, someFunction)
    }

    inOrder(someFunction) {

        function inOrderTraversal(node, someFunction) {
            if (someFunction === undefined) {
                const array = []
                if (node === null) {
                    return array;
                } else {
                    array.push(node.value)
                    return inOrderTraversal(node.left).concat(array.concat(inOrderTraversal(node.right)));  
                }
            } else {
                if (node === null) {
                    return;
                } else {
                    inOrderTraversal(node.left, someFunction);
                    someFunction(node.value);
                    inOrderTraversal(node.right, someFunction);
                }
            }
        }
        
        if (someFunction === undefined) {
            return inOrderTraversal(this.root);
        } else {
            inOrderTraversal(this.root, someFunction);
        } 
    }

    preOrder(someFunction) {

        function preOrderTraversal(node, someFunction) {
            if (someFunction === undefined) {
                const array = []
                if (node === null) {
                    return array;
                } else {
                    array.push(node.value)
                    return array.concat(preOrderTraversal(node.left).concat(preOrderTraversal(node.right)));  
                }
            } else {
                if (node === null) {
                    return;
                } else {
                    someFunction(node.value);
                    preOrderTraversal(node.left, someFunction);
                    preOrderTraversal(node.right, someFunction);
                }
            }
        }
        
        if (someFunction === undefined) {
            return preOrderTraversal(this.root);
        } else {
            preOrderTraversal(this.root, someFunction);
        } 
    }

    postOrder(someFunction) {

        function postOrder(node, someFunction) {
            if (someFunction === undefined) {
                const array = []
                if (node === null) {
                    return array;
                } else {
                    array.push(node.value)
                    return postOrder(node.left).concat(postOrder(node.right).concat(array));  
                }
            } else {
                if (node === null) {
                    return;
                } else {
                    postOrder(node.left, someFunction);
                    postOrder(node.right, someFunction);
                    someFunction(node.value);
                }
            }
        }
        
        if (someFunction === undefined) {
            return postOrder(this.root);
        } else {
            postOrder(this.root, someFunction);
        } 
    }

    height(node) {

        function findHeight(node) {
            let count = 0;
            if (node === null) {
                return count;
            } else if (node.left === null && node.right === null) {
                return count;
            } else {
                count += 1;
                let countLeft = findHeight(node.left);
                let countRight = findHeight(node.right);
                if (countLeft >= countRight) {
                    return count + countLeft
                } else {
                    return count + countRight
                }
            }
        }

        if (this.find(node) === "Not found") {
                return "Can't find the height of a node not in the tree"
        } else {
            const startNode = this.find(node)
            return findHeight(startNode);
    }

    };

    depth(node) {

        function findNodeDepth(startNode, node) {
            let count = 0
            if (startNode === null) {
                return count;
            } else if (node > startNode.value) {
                count += 1;
                return count + findNodeDepth(startNode.right, node);
            } else if (node < startNode.value) {
                count += 1;
                return count + findNodeDepth(startNode.left, node);
            } else {
                return count;
            }
        }

        if (this.find(node) === "Not found") {
            return "Can't find the depth of a node not in the tree"
        } else {
            return findNodeDepth(this.root, node);
        }


    }

    isBalanced() {

        function findHeight(node) {
            let count = 0;
            if (node === null) {
                return count;
            } else if (node.left === null && node.right === null) {
                return count;
            } else {
                count += 1;
                let countLeft = findHeight(node.left);
                let countRight = findHeight(node.right);
                if (countLeft >= countRight) {
                    return count + countLeft
                } else {
                    return count + countRight
                }
            }
        }

        function checkBalance(node) {
            if (node.left === null && node.right === null ) {
                return true
            } else if (Math.abs(findHeight(node.left) - findHeight(node.right)) > 1 || Math.abs(findHeight(node.right) - findHeight(node.left)) > 1) {
                return false;
            } else  {
                if (checkBalance(node.left) && checkBalance(node.right)) {
                    return true;
                } else {
                    return false;
                }
            } 
        }

        return checkBalance(this.root);
    }
}

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