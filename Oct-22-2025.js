/*
    Difficulty: Easy
    Date: October 22, 2025
    Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
    For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
    Bonus: Can you do this in one pass?
*/

function twoSum(numbers, k){
    const set = new Set();
    
    for(const num of numbers){
        const complement = k - num;
        if(set.has(complement)){return [complement, num];}
        
        //else its not in the map add it
        set.add(num);
    }

    return [];
}

console.log(twoSum([2, 4, 5, 1, 6], 10));