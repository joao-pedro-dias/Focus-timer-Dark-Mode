import {
    displayPlay,
    displayPause,
    displayReset,
    displayAdd,
    displaySub
} from './elements.js'

export default function({displays, timer}){
    displayPlay.addEventListener('click', function(){
        displays.play()
        timer.countdown()
    })

    displayPause.addEventListener('click', function(){
        displays.pause()
        timer.hold()
    })

    displayReset.addEventListener('click', function(){
        displays.reset()
        timer.resetTimer()
    })

    displayAdd.addEventListener('click', function(){
        timer.addMinutes()
    })

    displaySub.addEventListener('click', function(){
        timer.subMinutes()
    })
}
