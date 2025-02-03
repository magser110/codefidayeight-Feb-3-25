// function processData(number, callback) {
//     let result = number + 5;
//     callback(result)
// }

// function logResult(result) {
//     console.log(`Processed result: ${result}`);
    
// }

// processData(10, logResult);


// // function double(number) {
// //     console.log(number * 2);
    
// // }

// // double(10);

// // const double = (number) => console.log();
// // (number * 2);

// // double(10);

// const calculateAverage = (grades) => {
//     let amountOfGrades = 0;
//     let total = 0;
//     console.log(grades);
//     for (let i = 0; i < grades.length; i++) {
//         let currentGrade = grades[i];
//         console.log(currentGrade);
//         total += currentGrade;
//     }
//     console.log(total/ amountOfGrades);
    
    
// }

// calculateAverage([10, 70, 50, 70, 90])



// const doubled = (numbers) => {
//     const numbersDoubled = numbers.map((num) => num * 2)
//     console.log(numbersDoubled);
    
// }

// // doubled([1, 30, 20, 4, 10, 30, 26]);

// const logEvens = (nums) => {
//     const evens = nums.filter((num) => num % 2 === 0)
//      console.log(evens);
     
// }

// logEvens([1, 30, 20, 4, 10, 30, 26, 3, 9, 27]);

// const readNumbers = (nums) => nums.forEach((num) => console.log(num));
// readNumbers([1, 30, 20, 4, 10, 30, 26, 3, 9, 27]);


// const iTake5Seconds = () => {
// setTimeout(() => {
//     console.log(`this message is logged after 5`);
    
// }, 5000)
// }
// iTake5Seconds();

// const countDown = () => {
//     let initialCount = 15
//     setInterval(() => {
//         initialCount--;
//         console.log(initialCount);
//     }, 1000)
// }

// countDown();

//class ex 1
//Write a function applyDiscount that takes an array of prices and a callback function. The callback should apply a discount to each price. After the discount is applied, log the final prices.

const applyDiscount = (prices, discount, callback) => {
    const appliedDiscount = prices.map((price) => price - (price * discount) )
    console.log(appliedDiscount);
    
    callback(appliedDiscount);
}

const logData = (appliedDiscount) => {
    console.log(`the results are: ${appliedDiscount}`);
    
} 

applyDiscount([10, 15, 20], 0.15, logData);

//ex 3
//Write a function squareAndPrint that takes a number and uses an arrow function to square the number and log the result.

const squareAndPrint = (numbers) => {
    const squared = numbers.map((number) => (number ** 2));
    console.log(squared);
    
}

squareAndPrint([2, 3, 4, 5]);

// ex 3 
//Use map to take an array of strings and return an array where each string is reversed.

const reversedNumbers = (numbers) => {
    // const reversed = numbers.map((number) => (number.reverse()));
    // console.log(reversed);
    console.log(numbers.reverse());
    
}

reversedNumbers([1,2,3,4]);

// ex 4 
//Use filter to return only the odd numbers from an array of integers.

const oddNumbers = (numbers) => {
    const odd = numbers.filter((number) => number % 2 != 0);
    console.log(odd);
   
}

oddNumbers([1,2,3,4,5,6,7,8,9]);

// ex 5 
//Write a function that uses setTimeout to log "Task completed!" after a 5-second delay. Additionally, set up a setInterval to log "Still waiting..." every 2 seconds.

function testingTime() {
setTimeout(() => {
    console.log('Task completed!');
    
}, 5000);

setInterval(() => {
    console.log('Still waiting ...');
    
}, 2000);
}

// testingTime();