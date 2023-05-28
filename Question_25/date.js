function displayTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // Format the time to be two digits
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // Display the time and date
  document.querySelector(
    "#date"
  ).innerHTML = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
  console.count(`${hours}:${minutes}:${seconds} ${day}/${month}/${year}`);
}

// Update the clock every second
setInterval(displayTime, 1000);
