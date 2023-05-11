//? (עם אובייקטים) מערך של ציטוטים
const quotes = [
    { content: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { content: "Don't cry because it's over, smile because it happened.", author: "Dr. Seuss" },
    { content: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt" },
    { content: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { content: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { content: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { content: "Always forgive your enemies; nothing annoys them so much.", author: "Oscar Wilde" },
    { content: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { content: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },
    { content: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas A. Edison" }
];

//? בחירת ציטוט אקראי מהמערך
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

//? הוספת הציטוט לדף
window.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement("div");
    container.innerHTML = `
        <p>${randomQuote.content}</p>
        <p>— ${randomQuote.author}</p>
    `;
    document.body.appendChild(container);
});