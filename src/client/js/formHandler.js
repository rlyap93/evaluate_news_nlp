// Personal API Key for OpenWeatherMap API
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '62eac2ad377f4082e0e45d28a4c12900';
let city = 'Dublin';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(Client.checkForName(formText)){
        city = 'London';
    }

    getWeatherData(baseURL,city, apiKey)
    .then(function(res) {
        document.getElementById('results').innerHTML = res.main.temp + "&#8451; in " + res.name;
    })

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}

/* Function to GET Web API Data*/
const getWeatherData = async (baseURL, city, key)=>{
  const res = await fetch(`${baseURL}${city}&appid=${key}&units=metric`);
    
  try {
    const data = await res.json();
    return data;
  }  catch(error) {
    console.log("error", error);
  }
}

export { handleSubmit }
