const convertToCelsius = function(degreesFahrentheit) {
  return Math.round(((degreesFahrentheit - 32) * 5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(degreesCelsius) {
  return Math.round(((degreesCelsius * 9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
