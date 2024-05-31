let timeDiv = document.querySelector(".time");
let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("am_pm");

const timeUpdate = () => {
    let time = new Date();
    if(time.getHours() > 12 && time.getHours() <= 24){
        let gettingTwelveHours = time.getHours()-12;
        if (gettingTwelveHours<10){
            hr.innerText = "0"+gettingTwelveHours;
        }
        else{
            hr.innerText = gettingTwelveHours;
        }
        ampm.innerText = "pm";
    }
    else{
        hr.innerText = (time.getHours()<10?"0":"") + time.getHours();
        ampm.innerText = "am";
    }

    min.innerText = (time.getMinutes()<10?"0":"") + time.getMinutes();
    sec.innerText = (time.getSeconds()<10?"0":"") + time.getSeconds();
}

timeUpdate();
setInterval(timeUpdate,1000);

