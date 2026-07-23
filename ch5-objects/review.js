const user = {
    id: 1,
    firstName: "Alice"
}

// Άσκηση 1
// μία συνάρτηση getPropertyValue(obj, propertyName)
// που επιστρέφει την τιμή της ιδιότητασ με αυτο το όνομα

function getProperty(obj, propertyName) {
    return obj[propertyName]
}

console.log(getProperty(user, "id"))

