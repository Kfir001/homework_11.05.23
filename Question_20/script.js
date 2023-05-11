let count = 0;

//? פונקציה להעלאת המספר ב1
function increment() {
    count++;
    updateDisplay();
}

//? פונקציה להורדת המספר ב1
function decrement() {
    count--;
    updateDisplay();
}

//? פונקציה לאיפוס המספר
function reset() {
    count = 0;
    updateDisplay();
}

//? פונקציה לעדכון התצוגה
function updateDisplay() {
    document.querySelector("#count").textContent = count;
}

//? הוספת האלמנטים לדף
window.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement("div");
    container.innerHTML = `
        <p id="count">0</p>
        <button onclick="increment()">Increment</button>
        <button onclick="decrement()">Decrement</button>
        <button onclick="reset()">Reset</button>
    `;
    document.body.appendChild(container);
});