export default function Sounds ({
    audioFlorest,
    audioRain,
    audioCoffeeShop,
    audioFire,
    florestDisplay,
    rainDisplay,
    coffeeShopDisplay,
    fireDisplay
}) {

    let soundOn = false

    function pressButtonFlorestPlay(){
        audioFlorest.play()
    }

    function pressButtonFlorestPause(){
        audioFlorest.pause()
    }

    function pressButtonRainPlay(){
        audioRain.play()
    }

    function pressButtonRainPause(){
        audioRain.pause()
    }

    function pressButtonCoffeeShopPlay(){
        audioCoffeeShop.play()
    }

    function pressButtonCoffeeShopPause(){
        audioCoffeeShop.pause()
    }

    function pressButtonFirePlay(){
        audioFire.play()
    }

    function pressButtonFirePause(){
        audioFire.pause()
    }

    function florest(){
        if(soundOn == false){
            soundOn = true
            florestDisplay.classList.add('button-pressed')
            pressButtonFlorestPlay()
        } else{
            soundOn = false
            florestDisplay.classList.remove('button-pressed')
            pressButtonFlorestPause()
        }
    }

    florestDisplay.addEventListener('click', function(){
        florest()
    })

    function rain(){
        if(soundOn == false){
            soundOn = true
            rainDisplay.classList.add('button-pressed')
            pressButtonRainPlay()
        } else{
            soundOn = false
            rainDisplay.classList.remove('button-pressed')
            pressButtonRainPause()
        }
    }

    rainDisplay.addEventListener('click', function(){
        rain()
    })

    function coffeShop(){
        if(soundOn == false){
            soundOn = true
            coffeeShopDisplay.classList.add('button-pressed')
            pressButtonCoffeeShopPlay()
        } else{
            soundOn = false
            coffeeShopDisplay.classList.remove('button-pressed')
            pressButtonCoffeeShopPause()
        }
    }

    coffeeShopDisplay.addEventListener('click', function(){
        coffeShop()
    })

    function fire(){
        if(soundOn == false){
            soundOn = true
            fireDisplay.classList.add('button-pressed')
            pressButtonFirePlay()
        } else{
            soundOn = false
            fireDisplay.classList.remove('button-pressed')
            pressButtonFirePause()
        }
    }

    fireDisplay.addEventListener('click', function(){
        fire()
    })

    return {
        florest,
        rain,
        coffeShop,
        fire
    }
}