let isFahrenheit = true;

function convertTemperature()
{
    const temperatureInput = document.getElementById('temperatureInput');
    const temperatureOutput = document.getElementById('temperatureOutput');

    if(isFahrenheit)
    {
        const fahrenheit = parseFloat(temperatureInput.value);
        const celsius = (fahrenheit - 32) * 5 / 9;
        temperatureOutput.innerHTML = celsius.toFixed(2);
    }
    else
    {
        const celsius = parseFloat(temperatureInput.value);
        const fahrenheit = (celsius * 9 / 5) + 32;
        temperatureOutput.innerHTML = fahrenheit.toFixed(2);
    }
}

function setFahrenheit() 
  { 
    isFahrenheit = true;
    const cButton = document.getElementById('cButton');
    const fButton = document.getElementById('fButton');
    fButton.style.backgroundColor = '#333';
    fButton.style.color = '#fff';
    cButton.style.backgroundColor = '#fff';
    cButton.style.color = '#333';
    convertTemperature();
  }

function setCelsius() 
{
    isFahrenheit = false;
    const cButton = document.getElementById('cButton');
    const fButton = document.getElementById('fButton');
    cButton.style.backgroundColor = '#333';
    cButton.style.color = '#fff';
    fButton.style.backgroundColor = '#fff';
    fButton.style.color = '#333';
    convertTemperature();
  }

  