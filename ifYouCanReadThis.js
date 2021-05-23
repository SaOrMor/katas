/* Task
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

There are preloaded dictionary you can use, named NATO
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace
*/

let words = "If, you can read?"

const dictionary = {"a": "alpha", "b": "bravo", 
"c": "charlie", "d": "delta", "e":"echo", "f": "foxtrot", 
"g": "golf", "h": "hotel","i": "india","j": "juliett", 
"k": "kilo", "l": "lima", "m": "mike", "n": "november", 
"o": "oscar", "p": "papa", "q": "quebec", "r": "romeo",
"s": "sierra","t": "tango","u": "uniform","v": "victor",
"w": "whiskey","x": "xray", "y": "yankee", "z": "zulu"
  }

function to_nato(words) {
	
  let arrWord = words.split("")
  let kino = Object.keys(dictionary);
  let newArr= [];

  arrWord.filter(function(el, index) {

    kino.map(function(objLet, index) {
      if (el === objLet) {
        
        newArr.push(dictionary[objLet])
      }
    })
    
  })
 return newArr.join(" ")
}

to_nato(words)