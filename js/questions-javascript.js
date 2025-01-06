export const questions = [
  {
    id: 1, question: "1. Which keyword is used to declare a variable that cannot be reassigned in JavaScript?",
    options: ["var", "let", "const", "static"],
    answer: 2,
    explanation: "The `const` keyword is used to declare a variable that cannot be reassigned after its initial assignment."
  }, {
    id: 2, question: "2. Which of the following is NOT a valid data type in JavaScript?",
    options: ["number", "string", "boolean", "character"],
    answer: 3,
    explanation: "JavaScript does not have a character primitive data type, instead, it uses `string` to represent both characters and text."
  }, {
    id: 3, question: "3. What does the `===` operator do in JavaScript?",
    options: ["Assigns a value to a variable", "Checks if two values are equal after converting their types", "Checks if two values are equal without converting their types", "Creates a new variable"],
    answer: 2,
    explanation: "The `===` (strict equality) operator checks if two values are equal in both value and type, without performing any type conversion."
  }, {
    id: 4, question: "4. What is the purpose of the `typeof` operator in JavaScript?",
    options: ["To check if a variable is null", "To determine the data type of a variable", "To convert a variable to another data type", "To declare the type of variable"],
    answer: 1,
    explanation: "The `typeof` operator is used to determine the data type of a JavaScript variable, returning a string that represents the type."
  }, {
    id: 5, question: "5. Which of the following is used to add an element to the end of an array?",
    options: ["push()", "append()", "addEnd()", "insertLast()"],
    answer: 0,
    explanation: "The `push()` method adds one or more elements to the end of an array."
  }, {
    id: 6, question: "6. What does the `NaN` value represent in JavaScript?",
    options: ["Null pointer error", "Not a Number", "A very large number", "A data type for undefined values"],
    answer: 1,
    explanation: "The `NaN` value stands for 'Not a Number'. It is a special value that is returned when a mathematical operation cannot produce a valid number."
  }, {
    id: 7, question: "7. What does the `JSON.stringify()` method do in JavaScript?",
    options: ["Parses a JSON string to a JavaScript object", "Converts a JavaScript object to a JSON string", "Converts a string into array", "Converts a XML into a JSON"],
    answer: 1,
    explanation: "The `JSON.stringify()` method is used to convert a JavaScript object into a JSON string that can be stored or transmitted in text format."
  }, {
    id: 8, question: "8. What is a closure in JavaScript?",
    options: ["A function with no parameters", "A function that has access to the variables of its outer function scope even after the outer function has returned", "A loop used to iterate an array", "A way to declare a const"],
    answer: 1,
    explanation: "A closure is an inner function that has access to the outer function's variables, even after the outer function has been executed and exited. This allows for data encapsulation and persistent state."
  }, {
    id: 9, question: "9.  Which method is used to remove the first element from an array?",
    options: ["shift()", "pop()", "splice()", "delete()"],
    answer: 0,
    explanation: "The `shift()` method is used to remove the first element from an array, and returns the removed element."
  }, {
    id: 10, question: "10. What does the spread operator (...) do in JavaScript?",
    options: ["It allows to define an array of more than two dimensions.", "It allows to clone an array.", "It allows an iterable to be expanded in places where zero or more arguments are expected.", "It is an operator used to compare primitive values."],
    answer: 2,
    explanation: "The spread syntax (...) is used to expand elements in places like an array or function argument, allowing you to create new arrays or pass arguments without specifying them individually."
  }
];