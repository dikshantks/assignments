// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// pop()
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift() ans : The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
function shiftExample(arr) {
  console.log("Original Array:", arr);

  console.log(arr.shift()); // this is the removed element which is 1 and bieng printed
  // shift doesnot take any argument
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// unshift() ans : The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  // unshift takes one or more argument
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], [3, 5, 4, 3]);

// concat()
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// forEach()
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function (item, index) {
    console.log(item, index);
  });
}
forEachExample([78, 2, 3]);

// map() ans : The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function (item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// filter()
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function (item) {
    return item < 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find() ans : The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function (item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function (a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);
