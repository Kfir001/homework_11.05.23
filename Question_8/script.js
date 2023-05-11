 //? קבועים
 const STUDENTS_PER_SECURITY = 30;
 const STUDENTS_PER_PARAMEDIC = 30;
 const STUDENTS_PER_FIRST_AID = 50;

 //? קלט
 let numStudents = Number(prompt("הכנס את מספר התלמידים בבית הספר:"));

 //? חישוב מספר המאבטחים, החובשים והערכות עזרה ראשונה
 let numSecurity = Math.ceil(numStudents / STUDENTS_PER_SECURITY);
 let numParamedics = Math.ceil(numStudents / STUDENTS_PER_PARAMEDIC);
 let numFirstAidKits = Math.ceil(numStudents / STUDENTS_PER_FIRST_AID);

 //? הצגת התוצאה
 document.querySelector("#result").innerHTML = `מספר המאבטחים: ${numSecurity}<br>מספר החובשים: ${numParamedics}<br>מספר ערכות עזרה ראשונה: ${numFirstAidKits}`;