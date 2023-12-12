// SIMPLE ADDITION IPO CALCULATOR

// Input
document.getElementById("btn").addEventListener("click", calculate);
// Process
function calculate() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let number3 = document.getElementById("number3").value;
  let number4 = document.getElementById("number4").value;
  let number5 = document.getElementById("number5").value;
  let total = +number1 + +number2 + +number3 + +number4 + +number5;
  let average = total / 5;
  document.getElementById("grade").innerHTML = average;
}
// Output
