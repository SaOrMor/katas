let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function createPhoneNumber(numbers){
  let str = numbers.join("");
 
return "(" + str.charAt(0) + str.charAt(1) + str.charAt(2) + ")" + " " + str.charAt(3) 
        + str.charAt(4) + str.charAt(5) + "-" + str.charAt(6) + str.charAt(7) + str.charAt(8)
        

}