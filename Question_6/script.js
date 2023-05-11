 //? קבועים
 const DISCOUNT = 0.05;

 //? קלט
 let carPrice = Number(prompt("מחיר רכב (לפני הנחה):"));
 let numPayments = Number(prompt("הכנס מספר תשלומים:"));

 //? חישוב מחיר לאחר הנחה
 let discountedPrice = carPrice - (carPrice * DISCOUNT);

 //? חישוב סכום לתשלום
 let paymentAmount = discountedPrice / numPayments;

 //? הצגת התוצאה
 document.querySelector("#result").innerHTML = `מחיר אחרי הנחה: ${discountedPrice} ש"ח<br>תשלום חודשי: ${paymentAmount} ש"ח`;