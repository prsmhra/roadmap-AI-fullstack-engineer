const body = document.getElementsByTagName("body");
document.getElementById("color-toggle").addEventListener("click", () => {
    body[0].classList.toggle("dark-mode");
    // updateTimeContainerTheme();
})

// updateTimeContainerTheme();
function updateTimeContainerTheme(){
const dark = body[0].classList.contains("dark-mode");

if (document.querySelector(".time-container")){
    document.querySelector(".time-container").classList.toggle("time-dark-mode", dark);
    document.querySelector(".time-container").classList.toggle("time-light-mode", !dark);
}}


async function fetchTime() {
    const response = await fetch('/time');
    const data = await response.json();
    console.log(data)
    document.getElementById('time').textContent = data.time;
    document.getElementById('timezone').textContent = data.timezone;
    document.getElementById('date').textContent = data.date;
}

setInterval(fetchTime, 1000);
window.onload = fetchTime;
