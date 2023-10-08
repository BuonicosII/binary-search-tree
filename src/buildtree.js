import { Node } from "./nodeclass.js";

function buildtree(array) {

    if (array.length === 2) {
        let node = new Node(array[1]);
        node.left = new Node(array[0]);
        return node;
    } else if (array.length === 1) {
        let node = new Node(array[0]);
        return node;
    } else {
        let node = new Node(array[Math.floor(array.length / 2)]);
        node.left = buildtree(array.slice(0, (Math.floor(array.length / 2))));
        node.right = buildtree(array.slice(((Math.floor(array.length / 2)) + 1), array.length));
        return node;
    }
}

export { buildtree }