
let loc = document.getElementById("location");
let Temp_Icon = document.getElementById("temp-icon");
// console.log(Temp_Icon);
let Temp_Val = document.getElementById("temp-value");
let Temp_Unit = document.getElementById("temp-unit");
let Climate = document.getElementById("climate");

window.addEventListener("load" ,()=>{
    let long ;
    let lat ;

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log(long ,lat)
            const proxy = "https://cors-anywhere.herokuapp.com/" ;
            const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=bda29885cbd5b92803847a29efe9f784`
            console.log(api);
            fetch(api)
                .then((response) => {
                    return response.json();
                })
                .then(data => {
                    const {name} = data;
                    const {feels_like} = data.main ;
                    const {main } = data.weather[0] ;
                    const {id ,icon } = data.weather[0] ;


                    loc.textContent = name;
                    Climate.textContent = main;
                    Temp_Val.textContent = Math.round(feels_like-273);
                    Temp_Icon.src =`http://openweathermap.org/img/wn/${icon}.png`;

                  

                    
                })
    


        });
        
        
    };
 
});