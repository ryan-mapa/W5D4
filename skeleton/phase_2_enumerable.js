Array.prototype.myEach = function myEach(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function myMap(callback) {
  const result = [];
  for (var i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

Array.prototype.myEachMap = function myEachMap(callback) {
  const result = [];
  this.myEach(function pushEl(val){
    result.push(callback(val));
  });
  return result;
};

Array.prototype.myReduce = function myReduce(callback, initialValue) {

  let resultArr = Array.from(this);
  if (initialValue) {
    resultArr.unshift(initialValue);
  }
  let result = resultArr[0];

  resultArr.slice(1).myEach(function injection(val){
    result = callback(result, val);
  });
  return result;
};

//helper functions

function logger(el) {
  console.log(el);
  return el+1;
}

function doubleLogger(a,b){
  console.log(`Accumulator is ${a} and Element is ${b}`);
  return a + b;
}
