"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;
	if (d > 0) {
		arr[0] = (-b + Math.sqrt(d)) / 2 * a;
		arr[1] = (-b - Math.sqrt(d)) / 2 * a;
	} else if (d === 0) {
		arr[0] = -b / 2 * a;
	} else {
		arr = [];
	}
  console.log(arr);
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = Number(percent) / 100 / 12;
  let initialPayment = Number (contribution);
  let amountCredit = Number (amount);
  let monthCount = Number (countMonths);

  let credit = amountCredit - initialPayment;
  
  let payment = credit * (monthlyPercent + (monthlyPercent/((Math.pow((1 + monthlyPercent), monthCount)) - 1)));
  let totalAmount = (payment * monthCount).toFixed(2);
  console.log(totalAmount);
  return +totalAmount;
}