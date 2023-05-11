//? פונקציה שמקבלת מספר מהמשתמש ומדפיסה את המילה Hello x פעמים
function repeatHello() {
    //? בקשת מספר מהמשתמש
    let x = prompt("Enter a number:");
    //? המרת המספר למספר שלם
    x = parseInt(x);
    //? בדיקה אם המספר הוא מספר שלם חוקי
    if (isNaN(x) || x < 0) {
        alert("תכניס מספר נורמלי,חאלס להתחכם.");
        return;
    }
    //? יצירת מחרוזת ריקה לאחסון התוצאה
    let result = "";
    //? לולאה שמוסיפה את המילה Hello x פעמים למחרוזת התוצאה
    for (let i = 0; i < x; i++) {
        result += "Hello, ";
    }
    //? מציאת האלמנט שבו יוצג התוצאה
    let resultElement = document.querySelector("#result");
    //? הצגת התוצאה באלמנט
    resultElement.innerHTML = result;
}

//? repeatHello קריאה לפונקציה  כשהדף נטען
window.onload = repeatHello;