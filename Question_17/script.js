 //? פונקציה שמקבלת מידע מהמשתמש ומדפיסה אותו 10 פעמים
 function repeatText() {
    //? בקשת מידע מהמשתמש
    let text = prompt("תרשום משהו");
    //?יצירת מחרוזת ריקה לאחסון התוצאה
    let result = "";
    //? לולאה שמוסיפה את המידע 10 פעמים למחרוזת התוצאה
    for (let i = 0; i < 10; i++) {
        result += text + ", ";
    }
    //? תפיסת האלמנט שבו יוצג התוצאה
    let resultElement = document.querySelector("#result");
    //? הצגת התוצאה באלמנט
    resultElement.innerHTML = result;
}

//? repeatText קריאה לפונקציה  כשהדף נטען
window.onload = repeatText;