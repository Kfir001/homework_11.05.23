//? קליטת פרטים של שחקן 1
let player1_name = prompt('שם שחקן הראשון');
let player1_score = parseInt(prompt('התוצאה של השחקן הראשון'));

//? קליטת פרטים של שחקן 2
let player2_name = prompt('שם השחקן השני');
let player2_score = parseInt(prompt('התוצאה של השחקן השני'));

//? משווה את התוצאות של שני השחקנים ומדפיס את המנצח
let resultElement = document.querySelector('#result');
if (player1_score > player2_score) {
    resultElement.innerHTML = player1_name + ' הוא המנצח עם מרחק של ' + player1_score + ' מטרים';
} else if (player2_score > player1_score) {
    resultElement.innerHTML = player2_name + ' הוא המנצח עם מרחק של ' + player2_score + ' מטרים';
} else {
    resultElement.innerHTML = 'יש לנו תיקו!';
}