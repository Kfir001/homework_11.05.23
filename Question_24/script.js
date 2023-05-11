//? יצירת משתנה foo
let foo = prompt("Enter a value for foo:");

//? בדיקה אם המשתנה foo שווה ל- Thursday , ל - thursday או ל-5
switch (foo) {
  case "Thursday":
  case "thursday":
  case 5:
    //? אם כן, הדפסת המשפט "!Thursday! Yay" לקונסול
    console.log("!Thursday! Yay");
    break;
  default:
    //? אחרת, הדפסת הודעת שגיאה לקונסול
    console.error("WTF did you write???");
}
