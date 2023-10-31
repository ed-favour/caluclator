let calculation = " ";

function updateCalculation(param1) {
  calculation += param1;
  document.querySelector(".js-cal").innerHTML = `${calculation}`;
}

function evaluationCalculation() {
  eval(calculation);
  calculation = eval(calculation);
  // document.querySelector(".js-cal2").innerHTML = `${calculation}`;
  document.querySelector(".js-cal").innerHTML = `${calculation}`;
}

function delCaluclation(param1) {
  calculation = " ";
  document.querySelector(".js-cal").innerHTML = `${calculation}`;
  // document.querySelector(".js-cal2").innerHTML = `${calculation}`;
  document.querySelector(".js-cal").innerHTML = `${calculation}`;

  // work on local stoarge
}