/*
    Difficulty: Easy
    Date: Nov. 24th, 2025

    Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.
    Recall that the median of an even-numbered list is the average of the two middle numbers.
*/


function median(nums){
    let temp = [];

    for(let i = 0; i < nums.length; i++){
        temp = nums.slice(0, i + 1).sort((a, b) => a - b);

        if(temp.length % 2 === 0){
            const middleLow = (temp.length / 2) - 1;
            const average = (temp[middleLow] + temp[middleLow + 1]) / 2;

            console.log(average);
        }
        else{
            const middle = Math.floor(temp.length / 2);
            console.log(temp[middle]);
        }
    }
}
console.log("Test #1");
median([2, 1, 5, 7, 2, 0, 5]);

console.log("\nTest #2");
median([5, 6, 4, 2, 2, 0]);