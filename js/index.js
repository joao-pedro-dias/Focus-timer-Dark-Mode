import Displays from "./displays.js"
import Timer from "./timer.js"
import Events from "./events.js"
import {
    displayPause,
    displayPlay,
    displayMinutes,
    displaySeconds,
    fiveMinutes,
    html,
    buttonLight,
    buttonDark,
    audioFlorest,
    audioRain,
    audioCoffeeShop,
    audioFire,
    florestDisplay,
    rainDisplay,
    coffeeShopDisplay,
    fireDisplay
} from "./elements.js"
import DarkMode from './darkMode.js'
import Sounds from './sounds.js'

const darkMode = DarkMode({
    html,
    buttonLight,
    buttonDark
})

const sounds = Sounds({
    audioFlorest,
    audioRain,
    audioCoffeeShop,
    audioFire,
    florestDisplay,
    rainDisplay,
    coffeeShopDisplay,
    fireDisplay
})

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

Events({displays, timer, darkMode, sounds})


