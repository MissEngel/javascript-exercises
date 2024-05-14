const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if(!arr[0]){
    return 0;
  }
  let result = 0;

	for(let i = 0; i < arr.length; i++){
    result += arr[i];
  }
  return result;
};

const multiply = function(arr) {
  if(!arr[0]){
    return 0;
  }
  let result = arr[0];

	for(let i = 1; i < arr.length; i++){
    result *= arr[i];
  }
  return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {

  let result = 1;

	for(let i= 1; i <= n; i++){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
