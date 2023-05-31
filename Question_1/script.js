let num = prompt("היי,מה המצב ?,בואו נבדוק אם המספר זוגי או לא ");//? הצגת הודעה בדפדפן
        if (num % 2 == 0) { //? שימוש במודולוס על מנת לקבוע אם המספר זוגי או לא
            document.querySelector("#result").innerHTML = num + " מספר זוגי";
        } else { //? הצבת תנאים
            document.querySelector("#result").innerHTML = num + " מספר לא זוגי";
        }
        