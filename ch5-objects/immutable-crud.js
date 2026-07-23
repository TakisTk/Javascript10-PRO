const user = {
    id: 1, firstname: "Alice"
}

// Mutable add
// user.lastname = "W."

// Immutable add -- Fresh Copy
// const addToObj = (obj, field, value) => ({ ...obj, [field]: value})
// const newObj = addToObj(user, "lastname", "W.")
// console.log(user)
// console.log(newObj)

// Mutable Update
// user.firstname = "Maria"
// console.log(user)

// Immutable Update -- Fresh Copy
// const updateObj = (obj, field, newVal) => ({ ...obj, [field]: newVal})
// const updatedObj = updateObj(user, "firstname", "Maria2")
// console.log(user)
// console.log(updatedObj)

// Immutable Delete

const deleteFromObj = (obj, field) => {
    const { [field]: _, ...objToReturn } = obj
    return objToReturn
}

const objFromDelete = deleteFromObj(user, "id")
console.log(objFromDelete)