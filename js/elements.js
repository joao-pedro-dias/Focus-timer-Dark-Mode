const displayMinutes = document.querySelector('.minutes');
const displaySeconds = document.querySelector('.seconds');
const displayAdd = document.querySelector('#add');
const displaySub = document.querySelector('#sub');
const fiveMinutes = 5
const displayPlay = document.querySelector('#play');
const displayPause = document.querySelector('#pause');
const displayReset = document.querySelector('#reset');

const html = document.querySelector("html")
const buttonLight = document.querySelector(".light")
const buttonDark = document.querySelector(".dark")

const audioFlorest = new Audio("../audio/Floresta.wav");
const audioRain = new Audio("../audio/Chuva.wav");
const audioCoffeeShop = new Audio("../audio/Cafeteria.wav");
const audioFire = new Audio("../audio/Lareira.wav");

const florestDisplay = document.querySelector('#cardFlorest');
const rainDisplay = document.querySelector('#cardRain');
const coffeeShopDisplay = document.querySelector('#CardCoffeShop');
const fireDisplay = document.querySelector('#cardFire');

export {
    displayMinutes,
    displaySeconds,
    displayAdd,
    displaySub,
    displayPlay,
    displayReset,
    displayPause,
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

}