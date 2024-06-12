/* Exploring Array Manipulation in JavaScript
Tasks 1 */

let fruits = ["apple", "banana", "orange"];

function addFruit(arr, fruit) {
    arr.push(fruit);
    return arr;
}

function removeFruit(arr) {
    arr.pop();
    return arr;
}

console.log(addFruit(fruits, "grapes"))
console.log(removeFruit(fruits))

