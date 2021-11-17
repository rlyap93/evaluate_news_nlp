// Personal API Key for OpenWeatherMap API
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '62eac2ad377f4082e0e45d28a4c12900';
let city = 'Dublin';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('user-input').value
    if(Client.checkForText(formText)){
      fetch('http://localhost:8081/getText', {
          method: 'POST',
          credentials: 'same-origin',
          cache: 'no-cache',
          mode: 'cors',
          headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({text: formText}),
      })
      .then(res => res.json())
      .then(function(res) {
          console.log(res)
          document.getElementById('results-label').innerHTML = "You have written:"
          document.getElementById('user-input-text').innerHTML = res.sentence_list[0].text
          document.getElementById('results-text').innerHTML = "Please find sentiment results below"
          document.getElementById('results-agreement').innerHTML = res.agreement
      })
    }
    else{
      alert("Please enter a sentence to analyse");
    }
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
