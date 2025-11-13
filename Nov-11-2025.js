/* 
    Difficulty: Easy
    Date: Nov. 12th, 2025

    Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

    For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.
    In this example, assume nodes with the same value are the exact same node objects.
*/

function intersection(a, b){
    const visited = new Set();

    while(a !== null){
        visited.add(a);
        a = a.next;
    }

    while(b !== null){
        if(visited.has(b)){
            return b;
        }

        b = b.next;
    }

    return "No Intersection";

}
class ListNode{
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}

const intersect = new ListNode(8);
intersect.next = new ListNode(10);

//build lists for testing
const a = new ListNode(3);
a.next = new ListNode(7);
a.next.next = intersect;

const b = new ListNode(99);
b.next = new ListNode(1);
b.next.next = intersect;


console.log(intersection(a, b));