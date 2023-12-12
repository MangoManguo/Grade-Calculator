// SIMPLE ADDITION IPO CALCULATOR

document.getElementById("btn").addEventListener("click", calculate);
function calculate() {
  // Input
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let number3 = document.getElementById("number3").value;
  let number4 = document.getElementById("number4").value;
  let number5 = document.getElementById("number5").value;
  // Process
  let total = +number1 + +number2 + +number3 + +number4 + +number5;
  let average = total / 5;
  // Output
  document.getElementById("grade").innerHTML = average;
}

