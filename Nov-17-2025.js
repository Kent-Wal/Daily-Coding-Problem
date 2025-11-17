/*
    Difficulty: Medium
    Date: Nov. 17th, 2025

    Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.
    The list is very long, so making more than one pass is prohibitively expensive.
*/
let counter = 0;

function removeElement(node, k){
    if(node === null){
        return null;
    }

    node.next = removeElement(node.next, k);

    counter++;

    if(counter === k){
        return node.next;
    }

    return node;
}

class ListNode{
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}

//build list for testing
const root = new ListNode(1, null);
root.next = new ListNode(2, null);
root.next.next = new ListNode(3, null);
root.next.next.next = new ListNode(4, null);

console.log(removeElement(root, 3));