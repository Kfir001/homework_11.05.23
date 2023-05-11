//? קבועים
const MAX_PASSENGERS = 12;

//? קלט
let numPeople = Number(prompt("הכנס את מספר האנשים שממתינים בתחנה:"));

//? בדיקה אם המונית יכולה לצאת לדרך
if (numPeople >= MAX_PASSENGERS) {
    let remainingPeople = numPeople - MAX_PASSENGERS;
    document.querySelector("#result").innerHTML = `המונית יכולה לצאת.<br>מספר האנשים שנשארו בתחנה: ${remainingPeople}`;
} else {
    document.querySelector("#result").innerHTML = `המונית לא יכולה לצאת.`;
}