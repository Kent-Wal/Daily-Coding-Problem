/*
    Difficulty: Easy
    Date: Nov. 20th, 2025

    Run-length encoding is a fast and simple method of encoding strings. 
    The basic idea is to represent repeated successive characters as a single count and character. 
    For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

    You can assume the string to be encoded have no digits and consists solely of alphabetic characters. 
    You can assume the string to be decoded is valid.
*/

function runLengthString(str){
    if(str.length === 0){return '';}

    let newStr = '';
    let currentChar = str.charAt(0);
    let counter = 0;

    for(const s of str){
        if(s === currentChar){
            counter++;
        }
        else{
            newStr += `${counter}${currentChar}`;
            currentChar = s;
            counter = 1;
        }
    }

    newStr += `${counter}${currentChar}`;       //must append the last group of characters

    return newStr;
}

console.log(runLengthString('AAAABBBCCDAA'));
console.log(runLengthString('ZXYZXoLllll'));