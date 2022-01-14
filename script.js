var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var city = document.querySelector('.city')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var point = document.querySelector('.poin')

button.addEventListener('click',function(){

    fetch('http://api.weatherapi.com/v1/current.json?key=87336ef2f881457181785755221401&q='+inputValue.value+'&aqi=no')
    .then(response => response.json())
    .then(data => {
        var cityValue= data.location.name;
        var tempValue = data.current.temp_c;
        var descValue = data.current.condition.text ;

        city.innerHTML = cityValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
        point.innerHTML='°C'
       
        
    })
    
    .catch  (error => alert("wrong city name !"))
    if (inputValue='null'){
        alert('city name is required')

    }
    
    
    
})
