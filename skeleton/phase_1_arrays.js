Array.prototype.uniq = function () {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (!arr.includes(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};

Array.prototype.twoSum = function twoSum(target) {
  const result = [];
  for (let i = 0; i < this.length - 1; i++ ) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === target) {
        let arr = [i, j];
        result.push(arr);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function transpose() {
  const result = [];
  for (var i = 0; i < this.length; i++) {
    result.push([]);
  }
  this.forEach(function extractRows(row){
    row.forEach(function extractElements(el, idx){
      result[idx].push(el);
    });
  });
  return result;
};
