export const questions = [
  {
    question: "1. Which keyword is used to declare a constant in Java?",
    options: ["const", "static", "final", "immutable"],
    answer: 2,
    explanation: "The `final` keyword is used to declare a constant in Java, meaning its value cannot be changed after initialization.",
    image:["images/java/0001.png", "images/java/0002.png"],
  },
  {
    question: "2. Which of the following is NOT a primitive data type in Java?",
    options: ["int", "float", "String", "boolean"],
    answer: 2,
    explanation: "String is a class in Java, representing a sequence of characters, not a primitive data type.",
  },
  {
    question: "3. What is the purpose of the `new` keyword in Java?",
    options: ["To declare a variable", "To create a new class", "To allocate memory for a new object", "To define a method"],
      answer: 2,
    explanation: "The `new` keyword is used to create a new instance (object) of a class, allocating memory to store its data.",
   },
  {
        question: "4. Which access modifier provides the highest level of visibility in Java?",
        options: ["private", "protected", "public", "default"],
          answer: 2,
           explanation: "The `public` access modifier allows members of a class to be accessed from any other class, regardless of the package.",
    },
    {
        question: "5. What is method overriding in Java?",
        options: ["Creating a new method with the same name in the same class", "Defining a new method in a derived class with a different name", "Defining a new method in a derived class with the same name and same parameters", "Defining a new method in a base class with the same name and same parameters"],
        answer: 2,
          explanation: "Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass, with the same name and parameters."
    },
  {
        question: "6. What is the role of the 'static' keyword in Java?",
         options: ["To make a class immutable", "To indicate that a method belongs to the class itself, not an instance", "To define an abstract method", "To make the variable or method protected"],
           answer: 1,
        explanation: "The `static` keyword signifies that a member (variable or method) belongs to the class itself, rather than to any particular instance (object) of the class."
     },
     {
          question: "7. Which statement is used to handle exceptions in Java?",
        options: ["catch", "throw", "try-catch", "handle"],
        answer: 2,
         explanation: "The `try-catch` block is used to handle exceptions. Code that might throw an exception is placed inside the try block, and code to handle that exception is placed inside the catch block."
    },
      {
        question: "8. What is the purpose of the `this` keyword in Java?",
        options: ["To create a new object", "To refer to the current class", "To refer to the current object", "To call a superclass constructor"],
          answer: 2,
            explanation: "The `this` keyword is a reference to the current object and allows you to access its methods and attributes."
      },
       {
         question: "9. Which interface represents a collection that does not allow duplicate elements?",
           options: ["List", "ArrayList", "Set", "Map"],
           answer: 2,
            explanation: "The `Set` interface represents a collection that doesn't allow duplicate elements, ensuring uniqueness among the elements it contains."
    },
     {
        question: "10.  Which is the correct way to iterate an ArrayList?",
        options: ["for (int i=0; i < arrayList.length; i++)", "for (int i=0; i <= arrayList.length(); i++)", "for (int i=0; i < arrayList.size(); i++)", "for (String value : arrayList)"],
        answer: 3,
        explanation: "The enhanced `for` loop (for-each) provides a way to iterate each object in a collection, in this case, an `ArrayList` without using index based access."
   }
];