let temp = document.getElementById("temp");

temp.addEventListener("submit",(e)=>{
    e.preventDefault();

    let celsius = parseFloat(document.getElementById("Celsius").value);
    let fahrenheit = 0;
    let kelvin = 0;
    if (isNaN(celsius)) {
        alert("Enter the celsius value");
    }
    else{
        fahrenheit = (celsius*(9/5)) + 32;
        kelvin = celsius + 273.15;
        document.getElementById("Fahrenheit").innerHTML = fahrenheit + "°F";
        document.getElementById("Kelvin").innerHTML = kelvin +"K";
    }

})