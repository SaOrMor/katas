let numbers = "3 5 7 8 9"

function iqTest(numbers){


let num = numbers.split(" ");
let num1 = num.map(function(current) {
  return Number(current)
})

let arrEv = [];
let arrOdd = [];
let numToRet;

num1.filter(function(el){
if (el % 2 == 0) {
  arrEv.push(el);
} 
else {arrOdd.push(el)}
})


if (arrEv.length > 2) {

  num1.filter(function(el, i){
    if (el % 2 !== 0) {
      numToRet  = i+1;
    }
  })

}

if (arrOdd.length > 2) {
  
  num1.filter(function(el, i){
    if (el % 2 == 0) {
      numToRet  = i+1;
    }
  })
}
}

iqTest(numbers)
