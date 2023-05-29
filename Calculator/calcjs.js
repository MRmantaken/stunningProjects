// Get reference to the screen element
var screen = document.getElementById('screen');

// Get references to the button elements
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
var btnplus = document.getElementById('btnplus');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btnsub = document.getElementById('btnsub');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn0 = document.getElementById('btn0');
var esign = document.getElementById('esign');
var cleara = document.getElementById('cleara');
var multi= document.getElementById('multi');

// Add event listeners to the button elements
btn7.addEventListener('click', addToScreen);
btn8.addEventListener('click', addToScreen);
btn9.addEventListener('click', addToScreen);
btnplus.addEventListener('click', addToScreen);
btn4.addEventListener('click', addToScreen);
btn5.addEventListener('click', addToScreen);
btn6.addEventListener('click', addToScreen);
btnsub.addEventListener('click', addToScreen);
btn1.addEventListener('click', addToScreen);
btn2.addEventListener('click', addToScreen);
btn3.addEventListener('click', addToScreen);
btn0.addEventListener('click', addToScreen);
esign.addEventListener('click', evaluateExpression);
cleara.addEventListener('click', clearScreen);
multi.addEventListener('click', addToScreen);

//function to clear the screen
function clearScreen() {
  screen.value = ''
}

// Function to add button text to the screen
function addToScreen(event) {
  var buttonText = event.target.innerText;
  screen.value += buttonText;
}

// Function to evaluate the expression and display the result
function evaluateExpression() {
  var expression = screen.value;
  var result = eval(expression);
  screen.value = result;
}
