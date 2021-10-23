function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return arr1.every((item, index) => item === arr2[index]);
  } else {
    return false;
  }
}

function advancedFilter(arr) {
  let resultArr = arr.filter((num) => num > 0).filter((num) => num % 3 === 0).map((num) => num * 10);
  return resultArr;
}
