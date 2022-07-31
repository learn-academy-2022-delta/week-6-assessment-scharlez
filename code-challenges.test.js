// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// describe("sentenceMaker", () => {
//   it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
//     const people = [
//       { name: "ford prefect", occupation: "a hitchhiker" },
//       { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//       { name: "arthur dent", occupation: "a radio employee" }]
//       // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
//       expect(sentenceMaker(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])

//   })
// })


//* RAN TEST (RESULTS BELOW): *//

// ReferenceError: sentenceMaker is not defined

// b) Create the function that makes the test pass.

//Goal: Takes in an array of objects and returns an array with a sentence about each person with their name capitalized

//Pseudocode:
// Create a function expression called sentenceMaker. 
// Create variable that invokes the map method on the array array parameter. (arraySentence)
  // Convert array to string by invoking .join method. 
 // Capitalize first letter of all names by invoking using string.charAt(0).toUpperCase() joint methods. 
// Convert string back into array use .split method. 
// Return desired out. 

// const sentenceMaker= (arraySentence) => {
//   arraySentence.map
//   arraySentence.join
//   arraySentence.charAt(0).toUpperCase()
//   arraySentence.split
// }


//* RAN TEST (RESULTS BELOW): *//

// TypeError: arraySentence.charAt is not a function

// ** NOTES TO INSTRUCTOR **: I know there's not alot of code but this one had me very confused spent multiple hours on it and stackoverflow /Google made me even more lost on how to approach the solution. 

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// describe("remainderThree", () => {
//   it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
//     const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
//     // Expected output: [ 2, 0, -1, 0 ]
//     const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
//     // Expected output: [ 2, 1, -1 ]
//       expect(remainderThree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
//       expect(remainderThree(hodgepodge2)).toEqual([ 2, 1, -1 ])

//   })
// })


//* RAN TEST (RESULTS BELOW): *//

// ReferenceError: remainderThree is not defined

// b) Create the function that makes the test pass.

//Goal: Takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

//Pseudocode:
// Create a function expression remainderThree. 
// Create a variable that invokes a for loop parameters on array (array). 
  // Use .push method to move integers divisiable by 3 to front of array. 
  // Use .pop to remove Boolean values and string values 
//Run the function and return expected output. 

// const remainderThree= (array) => {
//   for(let i=0; i<array.length; i++) {
//     if(array[i] === "integer") {
//       array.push(array[i] % 3)
//       return array 
// # originally on line #97: ... === typeOf Boolean
//     } else if(array[i] === 'true' & 'false')
//       array.pop(array[i])
//     return array 
//   } else {
//     return array.pop(array[i])
//   }
// }

//* RAN TEST (RESULTS BELOW): *//
// SyntaxError: /Users/learnacademy/Desktop/week-6-assessment-scharlez/code-challenges.test.js: Unexpected token (101:2)

// ** NOTES TO INSTRUCTOR **: That syntax error is frustrating, I have rearranged the lines and nothing has fixed it, not to mention the code I'm not sure about but I wanted to see if I could use for loops to solve it. 

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumthingCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
      expect(sumthingCubed(cubeAndSum1)).toEqual(99)
      expect(sumthingCubed(cubeAndSum2)).toEqual(1125)

  })
})

//* RAN TEST (RESULTS BELOW): *//

// ReferenceError: sumthingCubed is not defined

// b) Create the function that makes the test pass.

//Goal: Takes in an array of numbers and returns the sum of all the numbers cubed

//Pseudocode:
// Create a function expression (sumthingCubed). 
// Set parameter as (output)
// Create variable to invoke/declare Math.pow method to give cube each index of array. 
// Use .forEach to iterate over function and determine the sum of the given and now cubed integers. 
// Use .join to convert array to string
// Return the desire output.

// const sumthingCubed= (output) => {
//   // # not used: let cubed = Math.pow([i], 3)
//   let cubed = Math.pow(cubeAndSum1, 3)
//   output.forEach(cubed => {
//     sum +- cubed 
//     return output.join 
//   })
// }

//* RAN TEST (RESULTS BELOW): *//

// ReferenceError: i is not defined

// ** NOTES TO INSTRUCTOR **: Another difficult problem, I feel like this one was asking me to run when I have only learn to crawl. Wasn't sure on my methodology here but logically/mentally it made sense to me.