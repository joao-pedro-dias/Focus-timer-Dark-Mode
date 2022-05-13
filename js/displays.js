export default function Displays({
    displayPlay,
    displayPause,
}) {

    function play(){
        displayPlay.classList.add('hide')
        displayPause.classList.remove('hide')
    }
    
    function pause(){
        displayPlay.classList.remove('hide')
        displayPause.classList.add('hide')
    }

    function reset(){
        displayPause.classList.add('hide')
        displayPlay.classList.remove('hide')
    }
    
    return{
        play,
        pause,
        reset
    }
}