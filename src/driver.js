import { Tree } from "./treeclass"
import { prettyPrint } from "./prettyprint";

function driverScript(){

    function randomArray () {
        let array = []

        for (let i = 0; i <= 30; i++) {
            let randomNum = Math.floor(Math.random() * (101));
            array.push(randomNum);
        }

        return array;
    }

    let tree = new Tree(randomArray());

    prettyPrint(tree.root);

    console.log(tree.isBalanced(), tree.inOrder(), tree.preOrder(), tree.postOrder());

    tree.insert(174);
    tree.insert(103);
    tree.insert(145);

    console.log(tree.isBalanced())

    tree.rebalance();

    console.log(tree.isBalanced(), tree.inOrder(), tree.preOrder(), tree.postOrder());

}

export { driverScript }