/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */


let string = "The quick brown fox jumps over the lazy dog.";

function isPangram(string){
  
  let alphabet = 
  ["a", "b", "c", "d", "e", "f", "g", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  let string2 = string.toLowerCase().split(" ").sort()

  string2 = string2.join('').split('').sort();

  let string3 = [];
  
  for (let i=0; i<string2.length; i++) {

    if (string2[i] == '.') {
    
      console.log("empty", string2[i])

      string2.splice(i, 1)
    } 
  string3 = string2.filter(function(letter, i) {
    return string2.indexOf(letter) == string2.lastIndexOf(letter) 
    
    
  })


  } 

  console.log(string3)
  console.log(string2)

  if (alphabet == string2) {
    return true
  } else {
    return false
  }

}

isPangram(string)