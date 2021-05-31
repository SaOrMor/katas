let numbers = [1,2,3,4];
let target = 4
let results = [];


function twoSum(numbers, target) {
 
 numbers.reduce((accumuletor, currValue, index, array) => {

results.push(accumuletor + currValue)
   
 })

 const sum = numbers.reduce((total, amount) => total + amount);

return results


}

twoSum(numbers, target)