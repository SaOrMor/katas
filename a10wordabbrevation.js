/* The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e"). */

let string = "elephant-rides are really fun!";


function abbreviate(string) {

let string1 = string.split(" ")
let string2 = "";

console.log(string1)

string1.forEach(parola1 => {
  
  if (parola1.includes("-")  ) {

    parola1.split("-")

      

  if (string.length > 3) {


string2 += string.charAt(0) + (string.length - 2) + string.charAt(string.length -1)

}  


  }
})









}


function abbreviate1(string) {
  return string.replace(/\w{4,}/g, function(word) {
    return word[0] + (word.length - 2) + word.slice(-1);
  });
}


abbreviate1(string)