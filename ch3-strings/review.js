function reverse(str) {
    let returnedStr = ''

    for ( let i = str.length - 1; i >= 0; i--) {
        returnedStr += str[i]
    }

    return returnedStr;
}

function reverse2(str) {
    return str.trim().split('').reverse().join('');
}

let str = "Coding"
console.log(reverse(str))
