function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;
  let avg = Number(
    (arr.reduce((sum, current) => sum + current, 0) / arr.length).toFixed(2)
  );

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
  let difference;
  if (arr.length > 0) {
    difference = Math.max.apply(null, arr) - Math.min.apply(null, arr);
  } else {
    difference = 0;
  }
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
      } else {
        sumOddElement = sumOddElement + arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  } else {
    return 0;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement = sumEvenElement + arr[i];
        countEvenElement++;
      }
    }
    return sumEvenElement / countEvenElement;
  } else {
    return 0;
  }
}

function makeWork(arrOfArr, func) {
  let maxResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const resultFunc = func(...arrOfArr[i]);
    if (resultFunc > maxResult) {
      maxResult = resultFunc;
    }
  }
  return maxResult;
}
