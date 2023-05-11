//? קולט את השעה מהמשתמש
let hour = parseInt(prompt('תכתוב שעה בין השעות 05:00 - 23:00'));

//? בודק את השעה ומדפיס את הטקסט המתאים
let resultElement = document.querySelector('#result');
if (hour >= 5 && hour <= 11) {
    resultElement.innerHTML = 'בוקר טוב';
} else if (hour >= 12 && hour <= 17) {
    resultElement.innerHTML = 'צהרים טובים';
} else if (hour >= 18 && hour <= 23) {
    resultElement.innerHTML = 'ערב טוב';
} else {
    resultElement.innerHTML = 'מאיפה הבאת את השעה הזאת ?';
}