//? קבועים
const MAX_PASSENGERS = 120;
const TICKET_PRICE = 6.60;
const VAT = 0.17;

//? קלט
let numCars = prompt("הכנס את מספר הרכבות:");
let timeOfDay = prompt("הכנס זמן ביום (בוקר, צהריים או ערב):");
let driverSalary = prompt("הכנס את שכר הנהג:");

//? חישוב תפוסה
let occupancy;
if (timeOfDay === "בוקר") {
    occupancy = 1;
} else if (timeOfDay === "צהריים") {
    occupancy = 0.9;
} else if (timeOfDay === "ערב") {
    occupancy = 0.7;
}

//? חישוב הכנסות
let revenue = numCars * MAX_PASSENGERS * TICKET_PRICE * occupancy;

//? חישוב רווח נטו
let netProfit = revenue - (revenue * VAT) - driverSalary;

//? הצגת התוצאה
document.querySelector("#result").innerHTML = `רווח נטו: ${netProfit} ש"ח`;
