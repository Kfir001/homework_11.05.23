 //? משתנה לתפיסת אלמנט הטופס
 const tipForm = document.querySelector("#tipForm");
 //? משתנה לתפיסת אלמנט שדה הסכום לתשלום
 const billAmount = document.querySelector("#billAmount");
 //? משתנה לתפיסת אלמנט שדה אחוז הטיפ
 const tipPercentage = document.querySelector("#tipPercentage");
 //? משתנה לתפיסת אלמנט המקום בו יוצגו התוצאות
 const result = document.querySelector("#result");

 //? פעולה שמבצעת את החישוב ומעדכנת את המשתמש
 function calculateTip(e) {
   //? מונע את הרענון של הדף
   e.preventDefault();
   //? מבצע את החישוב
   const tipAmount = (billAmount.value * tipPercentage.value) / 100;
   const totalAmount = parseFloat(billAmount.value) + parseFloat(tipAmount);
   //? מעדכנים את המשתמש בתוצאה
   result.textContent = `סכום הטיפ: ₪${tipAmount.toFixed(
     2
   )} | סכום כולל: ₪${totalAmount.toFixed(2)}`;
 }

 //? מאזין לאירוע של שליחת הטופס
 tipForm.addEventListener("submit", calculateTip);