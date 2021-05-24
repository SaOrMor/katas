let num = 9332

function squareDigits(num) {
  let word = String(num)
  let numb = [];
  let final = [];
  let sal = word.split("");

  sal.map(function(num){
    numb.push(Number(num))
     })

  numb.map(function(el){
    final.push(el**=2)
  })
  let x= final.join("")
  let n = Number(x)

  return n;
}

squareDigits(num)