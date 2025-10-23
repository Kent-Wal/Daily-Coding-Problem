/*
    Difficulty: Hard
    Date: October 23, 2025
    
    Given an array of integers, return a new array such that each element 
    at index i of the new array is the product of all the numbers in the original array except the one at i.

    For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
    If our input was [3, 2, 1], the expected output would be [2, 3, 6].
*/

function arrayProduct(nums){
    const productArray = nums.map((num, index) => {
        let product = 1;
        for(let i = 0; i < nums.length; i++){
            if(index === i){
                continue;
            }
            product *= nums[i];
        }
        return product;
    });

    return productArray;
}

console.log(arrayProduct([12, 11, 4, 7, 2]));