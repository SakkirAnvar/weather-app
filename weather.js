let city = document.getElementById('city')
let country= document.getElementById('country')
let temparture= document.getElementById('temparature')
let user_input = document.getElementById('user_input')

let checkTemp = async() =>{
    let cityValue = user_input.value
    if (  cityValue == "") {
        alert('plese enter city name before search')
    } else {
        let response = await fetch( `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`)
        let data = await response.json()
        city.textContent = data.name
        country.textContent = data.sys.country
        temparture.textContent = data.main.temp
    }
}