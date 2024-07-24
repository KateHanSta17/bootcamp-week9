// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
// The spread operator (...) is being used here. It creates a shallow copy of the songs array.
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
// The console will log newSongs, which is a new array containing all the elements from the songs array.
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  // The reduce() method executes a reducer function (in this case, (a, b) => a + b) on each element of the array, 
  // resulting in a single output value. Here, it sums up all the elements of the array, starting with an initial value of 0.
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
// The console will log the result of adding 1 + 2 + 3, which is 6.
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
// The syntax (...array) is known as the rest parameter syntax. It allows a function to accept an indefinite number of arguments as an array.
const additionSpread = (...array) => array.reduce((a, b) => a + b, 0);

// TODO: What do you expect to be logged in the console?
// The console will log the result of adding 1 + 2 + 3, which is 6.
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
// The console will log the result of adding 1 + 2 + 3 + 4 + 100, which is 110.
console.log(additionSpread(1, 2, 3, 4, 100));
