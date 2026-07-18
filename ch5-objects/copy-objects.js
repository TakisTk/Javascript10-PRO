const initial = { 
    firstname: "Alice", 
    age: 30,
    address: { street: "Patission", streetNum: 80 } 
}

const copyInitial = { ...initial }      // SHALLOW COPY 

const copyInitial2 = JSON.parse(JSON.stringify(initial))    // deep copy

const copyInitial3 = structuredClone(initial)   // deep copy