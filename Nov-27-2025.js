/*
    Difficulty: Medium
    Date: Nov. 27th, 2025

    Given the root to a binary search tree, find the second largest node in the tree.
*/

//works for all positive, negative and duplicates

class Node{
    constructor(data = -Infinity, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

//global variables
let largest = -Infinity;        //could have negative values in tree
let sLargest = -Infinity;

function secondLargest(root){
    if(root === null){return;}

    secondLargest(root.left);
    secondLargest(root.right);

    //check node
    if(root.data > sLargest){
        if(root.data > largest && root.data !== largest){
            sLargest = largest;
            largest = root.data;
        }
        else if(root.data !== largest){
            sLargest = root.data;
        }
    }
}

//build tree
const root = new Node(22);
root.left = new Node(21);
root.left.right = new Node(-225);
root.right = new Node(22);
root.right.right = new Node(3);

//execute function 
secondLargest(root);
console.log(sLargest);