function sayHello(name) {
    return `Hello ${name}`
}

console.log(sayHello('Alice'))

const add = function(a, b) {
    return a + b
}

console.log(add(3, 8))

const multiply = (a, b) => a * b;

console.log(multiply(4, 6))

function createButton(text, color) {
    color = color || 'blue'
    console.log(text, color)
}

function createButton2(text, color = 'blue') {
    console.log(text, color)
}

createButton2('Hello')
createButton2('Hello', 'Red')
createButton2('Hello', '')


