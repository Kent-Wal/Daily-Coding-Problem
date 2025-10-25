/* 
    Difficuly: Hard
    Date: Oct. 25th, 2025
    Given an array of integers, find the first missing positive integer in linear time and constant space. 
    In other words, find the lowest positive integer that does not exist in the array. 
    The array can contain duplicates and negative numbers as well.

    For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3
*/

function missingNum(arr){
    const values = new Set();
    let smallest = Infinity;

    for(const n of arr){
        if(n > 0){
            values.add(n);

            //keep track of the smallest number in the array
            if(smallest > n){
                smallest = n;
            }
        }
    }

    let i = 1;
    //find the smallest possible positive number thats not already in the set
    while(true){
        if(!values.has(i)){
            return i;
        }
        i++;
    }
}


console.log(missingNum([3, 4, -1, 1]));
console.log(missingNum([1, 2, 0]));