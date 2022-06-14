export default function DarkMode({
    html,
    buttonLight,
    buttonDark
}) {
    const getStyle = (element, style) =>
        window
            .getComputedStyle(element)
            .getPropertyValue(style)
    
    const initialColors = {
        bg: getStyle(html, "--bg"),
        colorSpan: getStyle(html, "--color-span"),
        displayColors: getStyle(html, "--display-colors")
    }
    
    const darkMode = {
        bg: "#333333",
        colorSpan: "#FCFCFC",
        displayColors: "#FCFCFC"
    }
    
    const transformKey = key =>
        "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()
    
    const changeColors = (colors) => {
        Object.keys(colors).map(key => 
                html.style.setProperty(transformKey(key), colors[key])
            )
    }
    
    buttonLight.addEventListener("click", () => {
        buttonLight.classList.add('hide')
        buttonDark.classList.remove('hide')

        changeColors(darkMode)
    })

    buttonDark.addEventListener("click", () => {
        buttonDark.classList.add('hide')
        buttonLight.classList.remove('hide')

        changeColors(initialColors)
    })

    return{
        buttonDark,
        buttonLight
    }
}
