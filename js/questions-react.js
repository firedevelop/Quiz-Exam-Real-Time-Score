export const questions = [
    {
        question: "1. What is the primary purpose of React?",
        options: ["To manage databases", "To build user interfaces", "To handle server-side logic", "To style web pages"],
        answer: 1,
        explanation: "React is a JavaScript library primarily used for building user interfaces or UI components.",
    },
    {
        question: "2. Which of the following is NOT a core concept in React?",
        options: ["Components", "JSX", "Virtual DOM", "Promises"],
        answer: 3,
        explanation: "Promises are a JavaScript feature used for asynchronous operations, not a core concept of React itself.",
    },
    {
         question: "3. What does JSX stand for in React?",
          options: ["JavaScript XML", "JavaScript Extension", "Java Simple XML", "JavaScript Syntax"],
         answer: 0,
            explanation: "JSX stands for JavaScript XML, which is a syntax extension that allows you to write HTML-like elements in your JavaScript code.",
     },
     {
         question: "4. What is a component in React?",
           options: ["A function that manages data", "A reusable and independent piece of the user interface", "A loop to iterate elements", "A style format for components"],
            answer: 1,
           explanation: "A component in React is an independent, reusable piece of the user interface, which can be composed with other components to build complex UIs.",
     },
      {
         question: "5. How are props passed in a React component?",
         options: ["As state", "As arguments to the component function or class", "As global variables", "As HTTP headers"],
           answer: 1,
           explanation: "Props are passed as arguments to the component function or as attributes to the class component, allowing data to flow from parent to child components.",
      },
      {
        question: "6. What is the primary purpose of the 'useState' hook in React?",
        options: ["To define a component's template", "To manage a component's data or state", "To handle events in a component", "To create a loop in a component"],
          answer: 1,
        explanation: "The useState hook is a built-in React hook that allows functional components to manage state, which is the internal data that changes over time.",
      },
    {
      question: "7. Which hook is used to handle side effects in React?",
       options: ["useState", "useEffect", "useContext", "useReducer"],
          answer: 1,
           explanation: "The useEffect hook is used to manage side effects in React components, such as data fetching, setting up subscriptions, or manually changing the DOM.",
    },
   {
      question: "8. How do you prevent a component from re-rendering in React?",
        options: ["Using shouldComponentUpdate", "Using the useState hook", "Using the useEffect hook", "Using React.memo"],
          answer: 3,
           explanation: "React.memo is a higher-order component that memoizes functional components, preventing re-renders if the props haven't changed.",
   },
     {
        question: "9. What is the Virtual DOM in React?",
         options: ["An abstraction of database connections", "A representation of the actual DOM in memory", "A list of components inside an application", "A collection of CSS styles"],
          answer: 1,
        explanation: "The Virtual DOM is a lightweight in-memory representation of the actual DOM. React uses it to efficiently update only the parts of the actual DOM that have changed."
    },
    {
        question: "10.  What is a key prop used for when rendering a list of elements in React?",
        options: ["To pass an unique id to the elements", "To define the style of the elements", "To show the title of the elements", "To define the color of the elements"],
          answer: 0,
           explanation: "A key prop provides a unique identifier to each element in a list, allowing React to track which items have changed, added, or removed when the list is updated."
    }
];