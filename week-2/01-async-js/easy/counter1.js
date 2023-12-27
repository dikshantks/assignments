// counter using setTimeout

// let counter = 0;

// setInterval(() => {
//   counter++;
//   console.log(counter);
// }, 1000);
// let counter = 0;

// let intervalId = setInterval(() => {
//   counter++;
//   console.log(counter);
//   if (counter === 10) {
//     clearInterval(10);
//   }
// }, 1000);
let counter = 0;

function incrementCounter() {
  counter++;
  console.log(counter);
  // if (counter < 10) {
  setTimeout(incrementCounter, 1000);
  //   }
}

setTimeout(incrementCounter, 1000);
