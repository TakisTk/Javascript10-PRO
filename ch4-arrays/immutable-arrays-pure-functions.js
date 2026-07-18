const numbers = [1, 2, 3, 4]

// Εισαγωγή ενός στοιχείου
numbers.push(5)
numbers.splice(3, 0, 5)

// Immutable Array
function addToArrayEnd(arr, num) {
    return [...arr, num]
}

function addToArrayStart(arr, num) {
    return [num, ...arr]
}

function addToArrayIndex(arr, num, index) {
    return [...arr.slice(0, index), num, ...arr.slice(index)]
}

// Update
numbers.splice(3, 1, 8)     // in place


// Immutable update
const updateAtArrayIndex = (arr, index, newValue) => {
    arr.map((item, i) => (i === index) ? newValue : item)
}

const updateAll = (arr, newValue) => arr.map(item => newValue)

// Delete
let index = numbers.indexOf(1)
if (index !== -1) numbers.splice(index, 1)

// Immutable delete
const deleteFromArray = (arr, num) => arr.filter(item => item !== num)  

const deleteByIndex = (arr, index) => 
    [...arr.slice(0, index), ...arr.slice(index + 1)]