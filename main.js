// get api key
const API_KEY = `534411fb2180ccd058927210e11e0946`;

const loadTemparature = async (city) => {
    const url = await `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    displayTemperature(data);
};

const displayTemperature = (data) => {
    setInnerTextById("temperature", data.main.temp);
    setInnerTextById("condition", data.weather[0].main);

};

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById("temp-btn").addEventListener("click", async() => {
    const searchField = document.getElementById("search-field");
    const city = searchField.value;
    document.getElementById("city-name").innerText = city;
    loadTemparature(city)
})

loadTemparature("Sylhet");