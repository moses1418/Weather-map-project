

function buildDOMObjects (forecastData, location) {
    $("#forecast-container").empty();
    console.log(forecastData);
    console.log(location);
    for (let i = 0; i < forecastData.length; i++) {
        let temp = forecastData[i].main.temp;
        let feels = forecastData[i].main.feels_like;
        let max = forecastData[i].main.temp_max;
        let low = forecastData[i].main.temp_min;
        let des = forecastData[i].weather[0].description;
        let loc = location.name;

        let date = forecastData[i].dt;
        date = new Date(date * 1000);
        let formattedDate = new Date(date).toDateString();

        let iconCode = forecastData[i].weather[0].icon

        $('#forecast-container').append(`
<div class="card col-2 mx-1 p-0" style="width: 18rem; background-color: #323544">
        <h5 class="d-flex justify-content-center" style="background: rgba(0,0,0,0.1)">${loc}</h5>  
        <div class="card-body d-flex justify-content-center flex-wrap">             
            <div class="card-title"><P>${formattedDate}</P></div>
            <p class="card-text"> current: ${temp}
            <br>
            <img src="http://openweathermap.org/img/w/${iconCode}.png" class="d-flex align-self-center"/>
            <br>
            feels like: ${feels}
            <br>
            high bruh: ${max}
            <br>
            low bruh: ${low}
            <br>
            </p>
        </div>
</div> `)
    }
}



