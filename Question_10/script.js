 //? קלט
 let bmi = prompt("Enter your BMI:");

 //? בדיקת התנאי
 if (bmi <= 18) {
     document.querySelector("#result").innerHTML = "Warning: Your BMI is too low.";
 } else if (bmi >= 25) {
     document.querySelector("#result").innerHTML = "Warning: Your BMI is too high.";
 } else {
     document.querySelector("#result").innerHTML = "Your BMI is normal.";
 }