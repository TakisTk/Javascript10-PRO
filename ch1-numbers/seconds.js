const totalSeconds = 75;
const SECONDS_PER_MINUTE = 60;

const minutes = Math.floor(totalSeconds / 60);
const seconds = totalSeconds % SECONDS_PER_MINUTE;

console.log(`${totalSeconds} seconds  = ${minutes} min and ${seconds} sec`)