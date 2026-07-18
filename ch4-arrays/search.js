const cities = ['Athens', 'London', 'NY'];

if (cities.indexOf('Athens') === -1) {
    console.log('Not Found.');
} else {
    console.log('Found');
}

// Modern way
if (cities.includes('Athens')) {
    console.log('Found')
}