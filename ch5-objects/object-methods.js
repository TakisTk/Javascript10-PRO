const user = {
    firstname: "George",
    lastname: "Papadopoulos",
    getFirstname: function() {
        return this.firstname
    },
    fetFullname() {
        return `${this.firstname}, ${this.lastname}`
    }
}

console.log(user.getFirstname())
console.log(user.fetFullname())