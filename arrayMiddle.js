const inputArray = [4, 0, 1]

var gimme = function (inputArray) {
  return inputArray.indexOf(inputArray.concat().sort(function(a,b){return a- b})[1])
};


gimme(inputArray)