const size = 10;

multiplicationTable = function(size) {
  let firstArr= []

  for (let i = 0; i<size; size--) {
    firstArr.push(size)
  }

  let arr = [];
  
  for (let i= 0; i<firstArr.length; i++) {
    arr[i] = [];

    if (firstArr[i] > 0) {
      
      firstArr.sort(function(a, b) {
        return a-b
      })

      firstArr.map(function(num) {
         
        arr[i].push(num * firstArr[i])

        arr[i]
      })
    }
  }

  
return arr
}

multiplicationTable(size)