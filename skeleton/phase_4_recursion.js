function range(start,end) {
  if (end === start) {
    return [start];
  }
  let smallerRange = range(start, end-1);
  return smallerRange.concat([end]);
}

Array.prototype.sumRec = function sumRec() {
  if (this.length === 1) {
    return this[0];
  }
  return this[0] + this.slice(1).sumRec();
};

function exponent(base, n) {
  if (n === 0) {
    return 1;
  }
  return base * exponent(base, n-1);
}

function dumbExponent(base, n) {
  if (n === 0) {
    return 1;
  }
  else if (n === 1) {
    return base;
  }
  else {
    if (n % 2 === 0) {
      let x = dumbExponent(base, n/2);
      return x * x;
    }
    else {
      let x = dumbExponent(base, (n-1)/2);
      return base * x * x;
    }
  }
}

function fibonacci(n) {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }
  let pastFib = fibonacci(n - 1);
  let sliced = pastFib.slice(n - 3);
  return pastFib.concat([sliced[0] + sliced[1]]);
}

Array.prototype.bsearch = function bsearch(target) {
  if (this.length === 1 && this[0] !== target){
    return -1;
  }
  let midIndex = Math.floor(this.length / 2);
  let midVal = this[midIndex];

  if (midVal === target) {
    return midIndex;
  }
  else if (midVal > target) {
    return this.slice(0,midIndex).bsearch(target);
  }
  else {
    let x = this.slice(midIndex).bsearch(target);
    if (x === -1){
      return -1;
    }
    else {
      return x + midIndex;
    }
  }
};

Array.prototype.mergesort = function mergesort() {
  if (this.length === 1) {
    return this;
  }
  let half = Math.floor(this.length / 2);
  let left = this.slice(0, half).mergesort();
  let right = this.slice(half).mergesort();

  return merge(left,right);
};

function merge(arr1, arr2) {
  const mergedArray = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] <= arr2[0]) {
      mergedArray.push(arr1.shift());
    } else {
      mergedArray.push(arr2.shift());
    }
  }
  return mergedArray.concat(arr1).concat(arr2);
}

Array.prototype.subsets = function subsets() {
  if (this.length === 0) {
    return [this];
  }
  let sub = this.slice(0,this.length-1).subsets();

  // console.log(sub);
  let last = this.slice(-1);
  let combined = Array.from(sub)
  for (var i = 0; i < sub.length; i++) {
    combined[i].concat(last)
  }
  return combined;

};


















let a = 'screw you linter';
