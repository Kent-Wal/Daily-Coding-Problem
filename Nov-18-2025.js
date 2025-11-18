/*
    Difficulty: Easy
    Date: Nov. 18th, 2025

    Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

    For example, given the string "([])[]({})", you should return true.
    Given the string "([)]" or "((()", you should return false.
*/

function validBrackets(str){
    const stack = [];
    const pairs = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ]);

    for(s of str){
        if(pairs.has(s)){    //if its an opening bracket add it to the stack
            stack.push(s);
        }
        else{       //must be a closing bracket
            if(pairs.get(stack.pop()) !== s){
                return false;
            }
        }
    }

    if(stack.length !== 0){
        return false
    }

    return true;
}

console.log(validBrackets('([])[]({})'));       //true
console.log(validBrackets('([)]'));             //false
console.log(validBrackets('((()'));             //false
console.log(validBrackets('([{}[()]]())'));     //true