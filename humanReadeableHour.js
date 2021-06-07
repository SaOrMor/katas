/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. */

let seconds = 86399;

function humanReadable(seconds) {
 
 let hour = ('0' + Math.floor(seconds / 3600)).slice(-2);
 let minutes = ("0" + Math.floor((seconds % 3600) / 60)).slice(-2);
 let sec = ('0' + Math.floor(seconds % 60)).slice(-2)

 return hour + ":" + minutes + ":" + sec
}
humanReadable(seconds)