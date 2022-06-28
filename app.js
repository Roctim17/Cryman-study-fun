// Date
const date = new Date()
document.getElementById('date').innerText = date.toLocaleDateString();

//Time
function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh === 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("clock").innerText = time;
    let t = setTimeout(function () { currentTime() }, 1000);
}

currentTime();




//Days
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const da = new Date();
let days = weekday[da.getDay()];
document.getElementById('day').innerText = weekday[da.getDay()];


var i = 0;
var txt = 'আজকে কি বার ঐটা ক্লিক কর। দেখ কি কি পড়াবো আজকে। '; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}






document.getElementById('day1').addEventListener("click", function () {
    document.getElementById('saturday').style.display = "block"
    document.getElementById('sunday').style.display = "none"
    document.getElementById('monday').style.display = "none"
    document.getElementById('tuesday').style.display = "none"
    document.getElementById('wednesday').style.display = "none"
    document.getElementById('thursday').style.display = "none"
    document.getElementById('friday').style.display = "none"
    document.getElementById('text').style.display = "none"
})
document.getElementById('day2').addEventListener("click", function () {
    document.getElementById('saturday').style.display = "none"
    document.getElementById('sunday').style.display = "block"
    document.getElementById('monday').style.display = "none"
    document.getElementById('tuesday').style.display = "none"
    document.getElementById('wednesday').style.display = "none"
    document.getElementById('thursday').style.display = "none"
    document.getElementById('friday').style.display = "none"
    document.getElementById('text').style.display = "none"
})
document.getElementById('day3').addEventListener("click", function () {
    document.getElementById('saturday').style.display = "none"
    document.getElementById('sunday').style.display = "none"
    document.getElementById('monday').style.display = "block"
    document.getElementById('tuesday').style.display = "none"
    document.getElementById('wednesday').style.display = "none"
    document.getElementById('thursday').style.display = "none"
    document.getElementById('friday').style.display = "none"
    document.getElementById('text').style.display = "none"
})
document.getElementById('day4').addEventListener("click", function () {
    document.getElementById('saturday').style.display = "none"
    document.getElementById('sunday').style.display = "none"
    document.getElementById('monday').style.display = "none"
    document.getElementById('tuesday').style.display = "block"
    document.getElementById('wednesday').style.display = "none"
    document.getElementById('thursday').style.display = "none"
    document.getElementById('friday').style.display = "none"
    document.getElementById('text').style.display = "none"
})
document.getElementById('day5').addEventListener("click", function () {
    document.getElementById('saturday').style.display = "none"
    document.getElementById('sunday').style.display = "none"
    document.getElementById('monday').style.display = "none"
    document.getElementById('tuesday').style.display = "none"
    document.getElementById('wednesday').style.display = "block"
    document.getElementById('thursday').style.display = "none"
    document.getElementById('friday').style.display = "none"
    document.getElementById('text').style.display = "none"
})
document.getElementById('day6').addEventListener("click", function () {
    document.getElementById('saturday').style.display = "none"
    document.getElementById('sunday').style.display = "none"
    document.getElementById('monday').style.display = "none"
    document.getElementById('tuesday').style.display = "none"
    document.getElementById('wednesday').style.display = "none"
    document.getElementById('thursday').style.display = "block"
    document.getElementById('friday').style.display = "none"
    document.getElementById('text').style.display = "none"
})
document.getElementById('day7').addEventListener("click", function () {
    document.getElementById('saturday').style.display = "none"
    document.getElementById('sunday').style.display = "none"
    document.getElementById('monday').style.display = "none"
    document.getElementById('tuesday').style.display = "none"
    document.getElementById('wednesday').style.display = "none"
    document.getElementById('thursday').style.display = "none"
    document.getElementById('friday').style.display = "block"
    document.getElementById('text').style.display = "none"
})