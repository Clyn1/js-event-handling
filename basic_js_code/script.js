// =============================
// 🌟 JavaScript Concepts Summary
// =============================

// 1. VARIABLES
let name = "Clyn";      // can change later
const country = "Kenya"; // constant value
var age = 25;           // legacy way (function-scoped)

// 2. DATA TYPES
let isStudent = true;                   // Boolean
let grade = 95;                         // Number
let hobbies = ["coding", "reading"];    // Array
let person = {                          // Object
  name: "Clyn",
  age: 25,
  isStudent: true
};
let nothing = null;     // Null
let notDefined;         // Undefined

// 3. STRING METHODS
console.log(name.toUpperCase());
console.log(name.length);

// 4. ARITHMETIC
let a = 10;
let b = 5;
console.log("Sum:", a + b);
console.log("Multiply:", a * b);

// 5. COMPARISON & LOGICAL OPERATORS
console.log(a > b);              // true
console.log(a === 10 && b < 10); // true

// 6. CONDITIONALS
if (age >= 18) {
  console.log("You're an adult.");
} else {
  console.log("You're a minor.");
}

// 7. LOOPS
for (let i = 1; i <= 5; i++) {
  console.log("Counting:", i);
}

let i = 0;
while (i < 3) {
  console.log("While loop:", i);
  i++;
}

// 8. FUNCTIONS
function greet(userName) {
  return `Hello, ${userName}!`;
}
console.log(greet("Clinton"));

// Arrow function
const add = (x, y) => x + y;
console.log(add(3, 7));

// 9. ARRAYS & METHODS
let fruits = ["apple", "banana", "mango"];
fruits.push("orange");
fruits.forEach(fruit => console.log("Fruit:", fruit));

let upperFruits = fruits.map(f => f.toUpperCase());
console.log(upperFruits);

// 10. OBJECTS & DESTRUCTURING
let student = {
  name: "Zuri",
  age: 14,
  class: "7B"
};

const { name: studentName, class: studentClass } = student;
console.log(studentName, studentClass);

// 11. DOM MANIPULATION (if used in browser)
const message = document.createElement("p");
message.innerText = "Welcome to JavaScript World!";
document.body.appendChild(message);

// 12. EVENTS
const btn = document.createElement("button");
btn.innerText = "Click Me!";
btn.style.padding = "10px";
document.body.appendChild(btn);

let clicks = 0;
btn.addEventListener("click", () => {
  clicks++;
  message.innerText = `You clicked ${clicks} times`;
});

// 13. TEMPLATE LITERALS
console.log(`My name is ${name}, and I love ${hobbies[0]}`);

// 14. SPREAD & REST
let numbers = [1, 2, 3];
let moreNumbers = [...numbers, 4, 5]; // Spread
console.log(moreNumbers);

function showAll(...args) {
  console.log(args);
}
showAll("JavaScript", "HTML", "CSS");

// 15. NULLISH COALESCING & OPTIONAL CHAINING
let bio = {
  user: {
    fullName: "Clinton Ochieng",
    age: 22
  }
};
console.log(bio?.user?.fullName ?? "No name");

// 16. SET TIMEOUT
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

// 17. PROMISES & FETCH (in browser)
function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log("Users:", data))
    .catch(err => console.error(err));
}
// Uncomment the next line to test fetch in browser:
// getData();

// 18. ASYNC / AWAIT
async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log("Async Users:", users);
  } catch (err) {
    console.log("Error:", err);
  }
}
// Uncomment the next line to test async/await in browser:
// getUsers();
