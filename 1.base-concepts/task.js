function solveEquation(a, b, c) {
  let D = b * b - 4 * a * c;
  let arr = [];
  let x1 = 0;
  let x2 = 0;

  if (D < 0) {
    return arr;
  } else if (D === 0) {
    x1 = -b / (2 * a);
    arr.push(x1);
  } else if (b ** 2 - 4 * a * c > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a); 
    x2 = (-b - Math.sqrt(D)) / (2 * a); 
    arr.push(x1, x2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
