// function transformArray(nums) {
//     // Add 5 to the start of the array
//     nums.unshift(5);
//     // Remove the last element
//     nums.pop();
//     // Create and return a new array where each value is incremented by 1
//     const newArray = [];
//     for (let i = 0; i < nums.length; i++) {
//         newArray.push(nums[i] + 1);
//     }
//     return newArray;
// }

//   console.log(transformArray([10, 20, 30])); // Expected output: [6, 11, 21]
  

//   function greetUser() {
//     console.log('Hello!');
//   }
  
//   function processUserData(callback) {
//     console.log('Processing data...');
//     callback();  // The callback is executed after data is "processed"
//   }
  
//   processUserData(greetUser);  // Output: "Processing data..." followed by "Hello!"

//   function fetchData(callback) {
//     console.log('Fetching data...');
//     setTimeout(() => {
//       console.log('Data fetched successfully!');
//       callback();  // Callback is called once the "data fetching" is done
//     }, 2000); // Simulate a 2-second delay
//   }
  
//   function displayData() {
//     console.log('Displaying fetched data...');
//   }
  
//   fetchData(displayData);

// ex 1
  function greetCustomer() {
    console.log('Your food is ready!');
    
  }

//   greetCustomer();

  function prepareFood(callback) {
    console.log('Preparing food ...');
    setTimeout(() => {
        callback();
    }, 3000);

  }

  prepareFood(greetCustomer);


  // ex 2
  function requestData(callback) {
    console.log('Requesting data ...');
    setTimeout(() => {
        callback();
    }, 2000);
  }

  function displayData() {
    console.log('Displying data ...');
    
  }

  requestData(displayData);

  //ex 3
  const square  = x => x ** 2;

  console.log(square(5));

  //ex 4
//   // Regular function
function multiply(a, b) {
    return a * b;
  }

  const multiply1 = (a, b) => a * b;


  console.log(multiply(3, 4));
  
  console.log(multiply1(3, 4));
  
// ex 5
const numbers = [1, 2, 3, 4, 5];

// Use the map function to create a new array where each number is squared
// Write your code below:
const squared = numbers.map(num => num ** 2);
console.log(squared);


// ex 6
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// First filter the even numbers, then double them
// Write your code below:

const filtered = numbers2.filter(num => num % 2 === 0).map(num => num * 2);
console.log(filtered);


// ex 7
// Using setTimeout to log a message after a delay
// Write your code below:

setTimeout(() => {
    console.log('Action executed!');
    
}, 3000);

//ex 8
// Using setInterval to log a message every 4 seconds
// Write your code below:
setInterval(() => {
    console.log('Repearing action!');
    
}, 4000);