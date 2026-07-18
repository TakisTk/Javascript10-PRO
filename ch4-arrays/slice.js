const cities = ['Athens', 'Patras', 'Larissa', 'Volos']

console.log(cities.slice(1, 3));
console.log(cities.slice(2));
console.log(cities.slice(-2))

// =============== shallow copy
const copyCities = cities.slice();      // old way to copy
const copyCities2 = [...cities];        // Modern way to copy

const orders = [ {total: 10}, {total: 20} ]
const deepOrdersCopy = structuredClone(orders)