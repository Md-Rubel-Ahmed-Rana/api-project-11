// get api key
const API_KEY = `534411fb2180ccd058927210e11e0946`;

const loadTemparature = async (city) => {
    const url = await `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    diplayTemperature(data);
};

const diplayTemperature = (data) => {
    const temperature = document.getElementById("temperature");
    temperature.innerText = data.main.temp;
};


document.getElementById("temp-btn").addEventListener("click", () => {
    const searchField = document.getElementById("search-field");
    const city = searchField.value;
    loadTemparature(city)
})

loadTemparature("dhaka");