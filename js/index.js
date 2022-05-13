import Displays from "./displays.js"
import Timer from "./timer.js"
import Events from "./events.js"
import {
    displayPause,
    displayPlay,
    displayMinutes,
    displaySeconds,
    fiveMinutes
} from "./elements.js"

const displays = Displays({
    displayPause,
    displayPlay,
})

const timer = Timer({
    displayMinutes,
    displaySeconds,
    fiveMinutes,
    resetDisplay: displays.reset
})

// const sound = Sound()

Events({displays, timer})


