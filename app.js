const url = "https://api.openweathermap.org/data/2.5/"
const key = "f071247bc505d4b2dd16efee2d5c3918"
const setQuery = (e) => {
    if (e.keyCode == "13") {
        getResult(searchBar.value)
    }
}
let city = document.querySelector(".city")
let query = `${url}weather?q=Istanbul&appid=${key}&units=metric&lang=en`
fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(result => {
        let city = document.querySelector(".city")
        city.innerText = `${result.name}, ${result.sys.country}`

        let temp = document.querySelector(".temp")
        temp.innerText = `${Math.round(result.main.temp)}°C`


        let desc = document.querySelector(".desc")
        desc.innerText = `${result.weather[0].main}`
        let minmax = document.querySelector(".minmax")
        minmax.innerText = `Min: ${Math.round(result.main.temp_min)}°C / Max: ${Math.round(result.main.temp_max)} °C`

    })



const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector(".city")
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector(".temp")
    temp.innerText = `${Math.round(result.main.temp)}°C`


    let desc = document.querySelector(".desc")
    desc.innerText = `${result.weather[0].main}`
    let minmax = document.querySelector(".minmax")
    minmax.innerText = `Min: ${Math.round(result.main.temp_min)}°C / Max: ${Math.round(result.main.temp_max)} °C`

}

const searchBar = document.getElementById("searchBar")
searchBar.addEventListener("keypress", setQuery)