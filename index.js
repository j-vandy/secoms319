let isFahrenheit = true;

function convertTemperature() {
  const temperatureOutput = document.getElementById('temperatureOutput');

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const temperature = isFahrenheit ? data.temperature_f : data.temperature_c;
      temperatureOutput.innerHTML = temperature.toFixed(2);
    })
}

function setFahrenheit() {
  isFahrenheit = true;
  const cButton = document.getElementById('cButton');
  const fButton = document.getElementById('fButton');
  fButton.style.backgroundColor = '#333';
  fButton.style.color = '#fff';
  cButton.style.backgroundColor = '#fff';
  cButton.style.color = '#333';
  convertTemperature();
}

function setCelsius() {
  isFahrenheit = false;
  const cButton = document.getElementById('cButton');
  const fButton = document.getElementById('fButton');
  cButton.style.backgroundColor = '#333';
  cButton.style.color = '#fff';
  fButton.style.backgroundColor = '#fff';
  fButton.style.color = '#333';
  convertTemperature();
}

function addHumidity(){
  const humidityOutput = document.getElementById('humidityOutput');

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const humidity = data.humidity;
      humidityOutput.innerHTML = humidity.toFixed(2);
    })
    .catch(error => console.error(error));
}

function changeThermostat(){
  fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const temperature = data.temperature_f;

    var image = document.getElementById("thermoImg")

    if(temperature <= 50)
    {
      image.src = "images/thermostatblue.jpg";
    }
    else if (temperature <= 70)
    {
      image.src = "images/thermostatorange.jpg";
    }
    else
    {
      image.src = "images/thermostatred.jpg";
    }
  })
  .catch(error => console.error(error));
}

function changeDrop(){
  fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const humidity = data.humidity;

    var image = document.getElementById("dropImg")

    if(humidity <= 25)
    {
      image.src = "images/thermostatblue.jpg";
    }
    else if (humidity <= 50)
    {
      image.src = "images/thermostatorange.jpg";
    }
    else if (humidity <= 75)
    {
      image.src = "images/thermostatred.jpg";
    }
    else
    {
      image.src = "images/thermostatred.jpg";
    }
  })
  .catch(error => console.error(error));
}

function goHome() {
  document.getElementById("home").style.display = 'block';
  document.getElementById("aboutus").style.display = 'none';
  document.getElementById("studentinfo").style.display = 'none';
  return false;
}
function goAboutUs() {
  document.getElementById("aboutus").style.display = 'block';
  document.getElementById("home").style.display = 'none';
  document.getElementById("studentinfo").style.display = 'none';
  return false;
}
function goThird() {
  document.getElementById("third").style.display = 'block';
  document.getElementById("aboutus").style.display = 'none';
  document.getElementById("studentinfo").style.display = 'none';
  return false;
}
