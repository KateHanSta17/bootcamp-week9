const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
// The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
const doubledArray = originalArray.map(data => data * 2);

console.log(doubledArray);
console.log(originalArray);


// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
// map() will return a new array where each element in originalArray is multiplied by 3.
// The anonymous function takes each number in originalArray, multiplies it by 3, and returns the result.
const tripledArray = originalArray.map(data => data * 3);

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
// map() will return a new array where each element in originalArray is transformed to 'odd' or 'even'.
// The anonymous function checks if each number is even or odd. If the number is even, it returns 'even'; otherwise, it returns 'odd'.
const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});
