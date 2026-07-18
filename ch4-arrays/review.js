// Άσκηση
// Μία συνάρτηση που να παίρνει ένα πίνακα
// αριθμών και να επιστρέφει το μεγαλύτερο
// αριθμό, χωρίς την Math.max

function findMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return
    }

    let max = -Infinity
    for (const element of arr) {
        if (element > max) {
            max = element
        }
    }
    return max
}

console.log(findMax([13, 5, 78, 42]))


// Άσκηση 2
// Μία συνάρτηση που λαμβάνει ως είσοδο
// ένα πίνακα αριθμών και επιστρέφει τον
// μέσο όρο

function findAvg(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return
    }

    let sum = 0
    for (const num of arr) {
        sum += num
    }

    return sum / arr.length
}

// Functional Solution
function findAvg2(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return
    }

    return arr.reduce((total, num) => total + num, 0)  / arr.length
}

// Άσκηση 3
// Μία συνάρτηση που ελέγχει (επιστρέφει true/false) 
// αν δύο πίνακες είναι ίσοι: ίδιο μήκος και ίδια στοιχεία

function equalArrays(arr1, arr2) {
    if (!Array.isArray(arr1) || arr1.length === 0) {
        return false
    }

    if (!Array.isArray(arr2) || arr2.length === 0) {
        return false
    }

    if (arr1.length !== arr2.length) return false

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true
}

console.log(equalArrays([1, 2, 3, 3], [1, 2, 3, 4]))

// Άσκηση 4
// Μία συνάρτηση που λαμβάνει ως είσοδο 
// ένα πίνακα και μία τιμή και επιστρέφει
// ένα νέο πίνακα (ο αρχικός δεν αλλάζει) 
// χωρίς να εμφανίζει την τιμή αυτή

function removeAllOccurances(arr, valueToRemove) {
    return arr.filter(value => value !== valueToRemove)
}

// Άσκηση 5
// Μία συνάρτηση που βρίσκει το 2ο μεγαλύτερο αριθμό
// ενός πίνακα. [7, 7, 4] ο 2ος μεγαλύτερος είναι το 4
function secondMax(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return
    }

    let firstMax = -Infinity
    let secondMax = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstMax) {
            secondMax = firstMax
            firstMax = arr[i]
        } else if (arr[i] > secondMax && arr[i] !== firstMax) {
            secondMax = arr[i]
        }
    }

    return secondMax
}

function secondMAx2(arr) {
    const uniqueNumbers = [...new Set(arr)]
    uniqueNumbers.sort((a, b) => b - a)
    return uniqueNumbers[1]
}


// Άσκηση 6
// Μία συνάρτηση που να παίρνει ως είσοδο ένα πίνακα
// και ένα θετικό offset και να κάνει αριστερό και κυκλικό
// shift κατά offset θέσεις. [1, 2, 3] -> [2, 3, 1]
function shiftLeft(arr, offset) {
    let shiftedArr = []
    const normalizedOffset = offset % arr.length;

    for (let i = 0; i < arr.length; i++) {
        shiftedArr[(i - normalizedOffset + arr.length) % arr.length] = arr[i]
    }

}