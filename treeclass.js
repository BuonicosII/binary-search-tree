import { Node } from "./nodeclass.js";
import { buildtree } from "./buildtree.js";

class Tree {
    constructor (array) {
        this.root = buildtree(array)
    }
}