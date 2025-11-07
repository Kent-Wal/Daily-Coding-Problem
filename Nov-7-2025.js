/*
    You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

        record(order_id): adds the order_id to the log
        get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.

*/

const N = 3;       //number of order ids in the log
let queue = [];

function record(orderId){
    if(queue.length === N){
        queue.shift();
    }

    queue.push(orderId);
}

function getLast(i){        //i is already guranteed to be smaller than or equal to N so dont need to check that
    return queue[N - i];
}

record(111);
record(123);
record(456);
record(789);

//print statements
console.log(queue);

console.log(getLast(1));
console.log(getLast(3));