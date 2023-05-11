 //? פונקציה שמציגה את התאריך והשעה
 function showDateTime() {
    //? יצירת אובייקט חדש
    let now = new Date();
    //? קבלת התאריך והשעה בפורמט מקובל
    let dateTime = now.toLocaleString();
    //? תפיסת האלמנט שבו יוצג התאריך והשעה
    let dateTimeElement = document.querySelector("#dateTime");
    //? הצגת התאריך והשעה באלמנט
    dateTimeElement.innerHTML = dateTime;
}