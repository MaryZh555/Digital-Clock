// const hoursElement = document.getElementById("hours");
// const minutesElement = document.getElementById("minutes");
// const secondsElement = document.getElementById("seconds");
// const ampmElement = document.getElementById("ampm");

// function updateClock() {
//     let hour = new Date().getHours();
//     let minute = new Date().getMinutes();
//     let second = new Date().getSecond();
//     let ampm = "AM";
//     if (hour > 12) {
//         hour = hour - 12;
//         ampm = "PM";
//     }

//     hoursElement.innerHTML = hour;
// }

// updateClock();

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSecond();
let ampm = "AM";

function updateClock() {
    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    };
    hoursEl.innerHTML = h;
}

updateClock();


