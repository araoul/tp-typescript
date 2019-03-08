function startTimer() {
    var isSelected = true;
    if (isSelected) {
        for (var cSec = 0; cSec < 60; cSec++) {
            //return cSec; 
            console.log(cSec);
        }
        if (cSec = 60) {
            cSec = 0;
            for (var sec = 1; sec < 60; sec++) {
                //return sec;
                console.log(sec);
            }
        }
        if (sec = 60) {
            sec = 0;
            for (var min = 1; min < 60; min++) {
                //return min
                console.log(min);
            }
        }
    }
}
startTimer();
