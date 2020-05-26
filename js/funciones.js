// VARIABLES
var operandoa;
var operandob;

function init() {
  mostrarPrompt();
}

function mostrarPrompt() {
  var pOperadora = prompt("Introduzca el primer operador.");
  var pOperadorb = prompt("Introduzca el segundo operador.");

  if (pOperadora == null || !pOperadora) {
    operandoa = 0;
  }

  if (pOperadorb == null || pOperadorb) {
    operandob = 0;
  }

  operandoa = Number(pOperadora);
  operandob = Number(pOperadorb);

  if (operandoa == null) {
    operandoa = 0;
  }

  if (operandob == null) {
    operandob = 0;
  }

  var result = operandoa + operandob;

  console.log(operandoa, " + ", operandob, " = ", result);
}
