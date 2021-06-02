/*Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels. */





function encode(string) {
    const vowelToNum = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5
    }
  
    string.split("").map(letter => {
      for (let i =0; i<Object.keys(vowelToNum).length; i++) {
        if (letter === Object.keys(vowelToNum)[i]) {
          string = string.replace(letter, Object.values(vowelToNum)[i])
        }
      }
    })
    return string
  } 
  
  
  
  
  
  
  let string = 'h3 th2r2';
  
  const vowelToNum = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5
    }
  
  function decode(string) {
  
  string.split("").map(letter => {
      for (let i =0; i<Object.values(vowelToNum).length; i++) {
        if (letter == Object.values(vowelToNum)[i])   
        {
          string = string.replace(letter, Object.keys(vowelToNum)[i])
        }
      }
    })
    return string
  }
  
  
  decode(string)