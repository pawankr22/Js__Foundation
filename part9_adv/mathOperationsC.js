//named export

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = {
  add,
  subtract,
  multiply,
};


// What is the purpose of ES6 modules in JavaScript?
// The purpose of ES6 modules in JavaScript is to provide a way to organize and structure code in
// a more modular and reusable way. ES6 modules allow developers to break down their code into
// smaller, independent modules that can be easily imported and used in other parts of the
// application.