Array.prototype.bubbleSort = function bubbleSort() {
  let arrCopy = Array.from(this);
  let flag = true;
  for (var i = 0; i < arrCopy.length - 1; i++) {
    for (var j = i + 1; j < arrCopy.length; j++) {
      if(arrCopy[i] > arrCopy[j]){
        let temp = arrCopy[j];
        arrCopy[j] = arrCopy[i];
        arrCopy[i] = temp;
      }
    }
  }
  return arrCopy;
};

String.prototype.substrings = function substrings() {
  const result = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j <= this.length; j++) {
      result.push(this.slice(i, j));
    }
  }
  return result;
};
