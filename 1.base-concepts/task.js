"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let x;
  let y;

  let discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return (arr = []);
  } else if (discriminant === 0) {
    x = -b / (2 * a);
    return (arr = [x]);
  } else if (discriminant > 0) {
    x = (-b + Math.sqrt(discriminant)) / (2 * a);
    y = (-b - Math.sqrt(discriminant)) / (2 * a);
    return (arr = [x, y]);
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let bodyCredit;
  let monthPayment;
  let totalAmount;

  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
  ) {
    console.log("Один из параметров содержит неверное значение");
    return false;
  }

  percent = percent / 100 / 12;
  bodyCredit = amount - contribution;
  monthPayment =
    bodyCredit * (percent + percent / (Math.pow(1 + percent, countMonths) - 1));
  totalAmount = parseFloat((monthPayment * countMonths).toFixed(2));

  return totalAmount;
}
