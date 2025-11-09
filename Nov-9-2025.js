/* 
    Difficulty: Hard
    Date: November 9th, 2025

    Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

    For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

        10 = max(10, 5, 2)
        7 = max(5, 2, 7)
        8 = max(2, 7, 8)
        8 = max(7, 8, 7)

        You can modify the input array in-place and you do not need to store the results. 
        You can simply print them out as you compute them.
*/

function maxValues(nums, k){
    while(nums.length >= k){
        const kNums = nums.slice(0, k);

        console.log(Math.max(...kNums));

        nums.shift()
    }
}

maxValues([10, 5, 2, 7, 8, 7], 2);

//slow but works