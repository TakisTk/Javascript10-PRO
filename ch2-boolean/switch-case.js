const day = 'Saturday';

switch (day) {
    case 'Saturday':
        console.log('Weekend - 1');
        break;
    case 'Sunday':
        console.log(Weekend - 1);
        break
    default:
        console.log('Weekday');
        break;
}

// Fallthrough -- K&R
switch (day) {
    case 'Saturday':
    case 'Sunday':
        console.log(Weekend - 1);
        break
    default:
        console.log('Weekday');
        break;
}