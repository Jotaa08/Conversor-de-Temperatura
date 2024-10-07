function converterParaCelsius() {
    const fahrenheit = document.getElementById('temperatura').value;
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('resultado').innerText = `${fahrenheit}°F é igual a ${celsius.toFixed(2)}°C`;
}

function converterParaFahrenheit() {
    const celsius = document.getElementById('temperatura').value;
    const fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('resultado').innerText = `${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`;
}