const user = {
    id: 1,
    firstName: "Alice"
}

// Άσκηση 1
// μία συνάρτηση getPropertyValue(obj, propertyName)
// που επιστρέφει την τιμή της ιδιότητασ με αυτο το όνομα

// function getProperty(obj, propertyName) {
//     return obj[propertyName]
// }

// console.log(getProperty(user, "id"))

// 2

// function getProperty(obj, propertyName) {
//     return obj?.[propertyName]
// }

// console.log(getProperty(null, "id"))


function getProperty(obj, propertyName) {
    if(obj == null || obj == undefined){
        return undefined
    }

    return Object.hasOwn(obj, propertyName)
        ? obj[propertyName]
        :undefined
        
}


function sumValues(obj) {
    let sum = 0

    for (const value of Object.values(obj)){
        sum += value
    }
    
    return sum
}

function sumValues2(obj) {
    return Object.values(obj).reduce((sum, value) => sum + values, 0)
}

