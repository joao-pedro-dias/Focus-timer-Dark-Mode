const displayMinutes = document.querySelector('.minutes');
const displaySeconds = document.querySelector('.seconds');

const displayAdd = document.querySelector('#add');
const displaySub = document.querySelector('#sub');
const fiveMinutes = 5

const displayPlay = document.querySelector('#play');
const displayPause = document.querySelector('#pause');
const displayReset = document.querySelector('#reset');

let timerTimeOut;
let minutes = Number(displayMinutes.textContent)

displayAdd.addEventListener('click', function(){
    if(displayMinutes.textContent < 60){
        let result = Number(displayMinutes.textContent) + Number(fiveMinutes)
        displayMinutes.textContent = String(result).padStart(2, "0")
    } else{
        return
    }
})

displaySub.addEventListener('click', function(){
    if(displayMinutes.textContent > 0){
        let result = Number(displayMinutes.textContent) - Number(fiveMinutes)
        displayMinutes.textContent = String(result).padStart(2, "0")
    } else {
        return
    }
})

function resetTimer(){
    updateTimer(minutes, 0);
    clearTimeout(timer);
}

function resetControl(){
    displayPause.classList.add('hide')
    displayPlay.classList.remove('hide')
}

function updateTimer(minutes, seconds){
    displayMinutes.textContent = String(minutes).padStart(2, "0")
    displaySeconds.textContent = String(seconds).padStart(2, "0")
}

function countDown(){
    timer = setTimeout(function(){
        let minutes = Number(displayMinutes.textContent)
        let seconds = Number(displaySeconds.textContent)

        updateTimer(minutes, 0)

        if(minutes <= 0 && seconds == 0){
            resetControl()
            return
        } else if(seconds <= 0) {
            seconds = 60
            --minutes
        }

        updateTimer(minutes, String(seconds -1))
        countDown()


    }, 1000)
}

displayPlay.addEventListener('click', function(){
    displayPlay.classList.add('hide')
    displayPause.classList.remove('hide')
    countDown()
})

displayPause.addEventListener('click', function(){
    displayPlay.classList.remove('hide')
    displayPause.classList.add('hide')

    clearTimeout(timer)
})

displayReset.addEventListener('click', function(){
    resetTimer()
    resetControl()
})
