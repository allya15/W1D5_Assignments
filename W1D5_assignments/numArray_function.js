var numArr = [];

function result() {
  return numArr;
}

function addNum(num) {
  numArr.push(num);
  return numArr;
}


function numbers(list) {
  return list.sort(function(a, b) {
    return a - b;
  });
}


module.exports = {
  addNum: addNum,
  numbers: numbers,
  result: result
};


