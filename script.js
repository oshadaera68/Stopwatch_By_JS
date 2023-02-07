let hour, timer, minute, seconds, interval;
let getSeconds = 0, getMintues = 0, getHours = 0;

function stopwatch() {
    this.start = function () {
        hour = document.getElementById("hour")
        minute = document.getElementById("minute")
        seconds = document.getElementById("seconds")

        if (getSeconds >= 0) {
            getSeconds++;
            seconds.innerHTML = getSeconds
        }

        if (getSeconds < 10) {
            seconds.innerHTML = "0" + getSeconds
        }

        if (getSeconds >= 60) {
            getSeconds = 0
            getMintues++;
            minute.innerHTML = getMintues
        }

        if (getMintues<10) {
            minute.innerHTML = "0" + getMintues + ":"
        }

        if (getMintues >=60) {
            getMintues=0;
            getHours++;
            hour.innerHTML = getHours
        }

        if (getHours<10) {
            hour.innerHTML = "0" + getHours + ":"
        }
        interval = setTimeout(object.start, 1000);
    }


    this.stop = function(){
        clearTimeout(interval);
    }

    this.reset = function() {
        if (getSeconds>=0) {
            getSeconds=0
            getHours=0
            getMintues=0

            seconds.innerHTML = "0" + getSeconds
            minute.innerHTML = "0" + getMintues + " :"
            hour.innerHTML = "0"+ getHours+" :"
            clearTimeout(interval)
        }
    }
}

let object = new stopwatch()