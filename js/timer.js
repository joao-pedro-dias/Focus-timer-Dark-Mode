export default function Timer({
    displayMinutes,
    displaySeconds,
    fiveMinutes,
    resetDisplay
}) {

    let timerOut;
    let minutes = Number(displayMinutes.textContent)
    
    function updateTimer(minutes, seconds){
        displayMinutes.textContent = String(minutes).padStart(2, "0")
        displaySeconds.textContent = String(seconds).padStart(2, "0")
    }

    function resetTimer(){
        updateTimer(minutes, 0);
        hold();
    }

    function hold(){
        clearTimeout(timerOut)
    }

    function addMinutes(){
        if(displayMinutes.textContent < 60){
            let result = Number(displayMinutes.textContent) + Number(fiveMinutes)
            displayMinutes.textContent = String(result).padStart(2, "0")
        } else{
            return
        }
    }

    function subMinutes(){
        if(displayMinutes.textContent > 0){
            let result = Number(displayMinutes.textContent) - Number(fiveMinutes)
            displayMinutes.textContent = String(result).padStart(2, "0")
        } else {
            return
        }
    }
    
    function countdown(){
        timerOut = setTimeout(function(){
            let minutes = Number(displayMinutes.textContent)
            let seconds = Number(displaySeconds.textContent)
    
            updateTimer(minutes, 0)
    
            if(minutes <= 0 && seconds == 0){
                resetDisplay()
                return
            } else if(seconds <= 0) {
                seconds = 60
                --minutes
            }
    
            updateTimer(minutes, String(seconds -1))
            countdown()
    
    
        }, 1000)
    }

    return {
        countdown,
        resetTimer,
        updateTimer,
        hold,
        addMinutes,
        subMinutes
    }
}
