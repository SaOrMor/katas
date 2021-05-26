/* Let us begin with an example:

A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

Can you help him?

How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over? */




let startPriceOld = 2000;
let startPriceNew= 8000;
let savingperMonth = 1000;
let percentLossByMonth = 1.5;
let incresePercLoss = 0.5;



function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
 

let months = 0;
let saving = 0;
let moneyDifference = 0;




while (startPriceNew >= saving + startPriceOld) {


startPriceNew = startPriceNew - startPriceNew * percentLossByMonth / 100;
console.log("startPriceNew", startPriceNew)

saving = saving + savingperMonth;
console.log("saving",saving)

startPriceOld = startPriceOld - startPriceOld * percentLossByMonth /100;
console.log("startPriceOld", startPriceOld)



if (months % 2 === 0) {
  console.log("running if")
  percentLossByMonth = percentLossByMonth + 0.5;
}
months++


}

moneyDifference = saving + startPriceOld - startPriceNew
console.log("moneyDifference", moneyDifference)

return [months, Math.round(moneyDifference)];


}

nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth)