console.log("Week 8 - JS - Loops - Class Assignment");

const displayValueElement = document.querySelector(".display_value");

const displayValueOnAnHTMLElement = (message, elementValue) => {
  let result = `<p class='display_result'>${message}: <span>${elementValue}</span></p> <br />`;
  return displayValueElement.innerHTML += result;
};

// Slide 17/36
// Loops - to perform repeated tasks based on a condition. A loop will continue running until the defined condition returns false.
// for-loops are multiple times faster.

// for loop

// 1) initialization - This expression runs (ONCE) before the execution of the first loop, and is usually used to create a counter.
// 2) condition - This expression is checked each time before the loop runs. If it evaluates to true, the statement or code in the loop is executed. If it evaluates to false, the loop stops. And if this expression is omitted, it automatically evaluates to true.
// 3) block - This is where the code lives and it runs after the condition is checked
// 4) finalExpression - This expression is executed after each iteration of the loop. This is usually used to increment a counter, but can be used to decrement a counter instead.

// Slide 21/36
// When iterating over an array, IMP - NOT to exceed the bounds of the array.

// Slide 22/36
// Exercise - 1
// 1. Create an array containing 3 different online shops’ names
// 2. Loop through that array using a for loop and console.log the name of the shop

const onlineShopNames = ['Amazon', 'LuxPlus', 'Matas'];
displayValueOnAnHTMLElement("onlineShopNames", onlineShopNames);

// Two ways to fix - NOT to exceed the bounds of the array.
// i) Set condition to i < arr.length & i = 0
for (let i = 0; i < onlineShopNames.length; i++) {
  displayValueOnAnHTMLElement("onlineShopNames - i < arr.length & i = 0", onlineShopNames[i]);
}

// Alternate i) - Set condition to i < arr.length+1 & i = 1 & arr[i - 1]
for (let i = 1; i < onlineShopNames.length + 1; i++) {
  displayValueOnAnHTMLElement("onlineShopNames - i < arr.length+1 & i = 1 & arr[i - 1]", onlineShopNames[i - 1]);
}

// OR
// ii) Set condition to i <= arr.length-1 & i = 0
for (let i = 0; i <= onlineShopNames.length - 1; i++) {
  // console.log(`onlineShopNames: ${onlineShopNames[i]}`);
  displayValueOnAnHTMLElement("onlineShopNames - i <= arr.length-1 & i = 0", onlineShopNames[i]);
}

// Alternate ii) - Set condition to i <= arr.length & i = 1 & arr[i - 1]
for (let i = 1; i <= onlineShopNames.length; i++) {
  displayValueOnAnHTMLElement("onlineShopNames - i <= arr.length & i = 1 & arr[i - 1]", onlineShopNames[i - 1]);
}

// -------------------------------------

// Slide 23/36
// for-of statement - loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more

// use let shop - if the variable is going to be re-assigned inside a for-of statement
for (const shop of onlineShopNames) {
  console.log(`shop: ${shop}`);
  displayValueOnAnHTMLElement("shop - for-of loop", shop);
}

// Slide 24/36
const carListUlElement = document.getElementById('car_list_container');

const carBrands = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi'];

for (const car of carBrands) {
  const carListNameliElement = document.createElement('li');
  carListUlElement.appendChild(carListNameliElement);
  carListNameliElement.textContent = car;
}

// Slide 25/36
// Exercise - 2

// 1. Create a <ul> element in your HTML
// 2. Loop through your database array using a for-of loop and do the following on each iteration:
// a. Create a <li> element
// b. Add the shop name to the innerHtml of the element
// c. Append the element to the <ul> created above

const supermarketNames = ['Netto', 'Føtex', 'Lidt', 'Super Brugsen', 'Fakta'];

// 1. Create a <ul> element in your HTML
const supermarketListUlElement = document.querySelector('.supermarket_list_container');

// 2. Loop through your database array using a for-of loop and do the following on each iteration:
for (const supermarket of supermarketNames) {
  // a. Create a <li> element
  const supermarketListNameliElement = document.createElement('li');

  // b. Add the shop name to the innerHtml of the element

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
  // Security considerations -  it is recommended to use Node.textContent instead of innerHTML
  supermarketListNameliElement.textContent = supermarket;

  // c. Append the element to the <ul> created above
  supermarketListUlElement.appendChild(supermarketListNameliElement);
}

// Slide 27/36
// Break - statement "jumps out" of a loop.

const displayBreakStatementElement = document.querySelector(".display_break_statement");

const displayBreakStatementValueOnAnHTMLElement = (message, elementValue) => {
  let result = `<p class='display_result'>${message}: <span>${elementValue}</span></p> <br />`;
  return displayBreakStatementElement.innerHTML += result;
};

for (let i = 1; i < 10; i += 2) {
  if (i === 7) {
    break;
  }

  displayBreakStatementValueOnAnHTMLElement("i value is between 1 to 10, i < 10, loop breaks, when i === 7 - ", i);
}

// Continue - statement "jumps over" one iteration in the loop.

const displayContinueStatementElement = document.querySelector(".display_continue_statement");

const displayContinueStatementValueOnAnHTMLElement = (message, elementValue) => {
  let result = `<p class='display_result'>${message}: <span>${elementValue}</span></p> <br />`;
  return displayContinueStatementElement.innerHTML += result;
};

for (let i = 1; i < 10; i += 2) {
  if (i === 7) {
    continue;
  }

  displayContinueStatementValueOnAnHTMLElement("i value is between 1 to 10, i < 10, loop jumps over, when i === 7 - ", i);
}

// Slide 30/36
// While loop - loops through a block of code as long as a specified condition is true.

const whileAndDoWhileLoopElement = document.querySelector(".while_and_do_while_loop");

const displayWhileAndDoWhileLoopElementValueOnAnHTMLElement = (message, elementValue) => {
  let result = `<p class='display_result'>${message}: <span>${elementValue}</span></p> <br />`;
  return whileAndDoWhileLoopElement.innerHTML += result;
};

let whileLoopInitialValue = 1;
const whileLoopMaxValue = 4;

while (whileLoopInitialValue < whileLoopMaxValue) {
  displayWhileAndDoWhileLoopElementValueOnAnHTMLElement("While loop runs a block of code, until a condition (1 < 4) is true", whileLoopInitialValue);
  whileLoopInitialValue++;
}

// Slide 32/36
// Do-While loop - This is a variant of the while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:

let doWhileLoopInitialValue = 3;
const doWhileLoopMaxValue = 7;

do {
  displayWhileAndDoWhileLoopElementValueOnAnHTMLElement("Do While loop executes at least once, even if the condition is false. Condition (3 > 7) is false", doWhileLoopInitialValue);
  doWhileLoopInitialValue++;
} while (doWhileLoopInitialValue > doWhileLoopMaxValue);

// do {
//   displayWhileAndDoWhileLoopElementValueOnAnHTMLElement("Do While loop executes at least once, before the condition is tested. Condition (3 < 7) is true", doWhileLoopInitialValue);
//   doWhileLoopInitialValue++;
// } while (doWhileLoopInitialValue < doWhileLoopMaxValue);
