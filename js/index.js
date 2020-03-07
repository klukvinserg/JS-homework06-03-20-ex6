let numOne;
let numTwo;
let action;
let tmp;
let result;

for (; true; ) {
  while (true) {
    numOne = +prompt("Enter number 1");
    if (!isNaN(numOne)) {
      break;
    } else {
      alert("Input incorrect");
      continue;
    }
  }

  while (true) {
    numTwo = +prompt("Enter number 2");
    if (!isNaN(numTwo)) {
      break;
    } else {
      alert("Input incorrect");
      continue;
    }
  }

  while (true) {
    action = prompt("Enter action: +, -, /, *");
    if (action === "+" || action === "-" || action === "/" || action === "*") {
      break;
    } else {
      alert("Input incorrect");
      continue;
    }
  }

  if (action === "+") {
    result = numOne + numTwo;
  } else if (action === "-") {
    result = numOne - numTwo;
  } else if (action === "/") {
    result = numOne / numTwo;
  } else if (action === "*") {
    result = numOne * numTwo;
  }

  alert(`Result: ${result}`);

  tmp = confirm("Continue?");

  if (tmp === true) {
    continue;
  } else {
    break;
  }
}
