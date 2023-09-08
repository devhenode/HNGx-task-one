function getCurrentDay() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeek = now.getDay();
    return daysOfWeek[dayOfWeek];zz
 
}

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

const day = getCurrentDay();
const currentTime = getCurrentTime();

let date = document.getElementById("currentDayOfTheWeek").innerHTML = "Day of the week: " + day;
let moment = document.getElementById("currentUTCTime").innerHTML = "Current UTC time: " + currentTime;


