const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    //Setting variables
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    //Changing PM and AM
    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }
    //Two digit format
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    //Synchronizing with html file
    hoursEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;
    //Updating the function every second
    setTimeout(() => {
        updateClock();
    }, 1000)
}
updateClock();


