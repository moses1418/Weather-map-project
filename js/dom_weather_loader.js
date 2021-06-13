

function buildDOMObjects (forecastData) {
    console.log(forecastData);
    for (let i = 0; i < forecastData.length; i++) {
        let temp = forecastData[i].main.temp;
        let feels = forecastData[i].main.feels_like;
        let max = forecastData[i].main.temp_max;
        let low = forecastData[i].main.temp_min;
        let des = forecastData[i].weather[0].description;
        $('#forecast').append(`
<div class=“card” style="width: 18rem;">
        <div class=“card-body”>
            <h5 class=“card-title”>Card title</h5>
            <p class=“card-text”> ${temp}
            <br>
            ${des}
            <br>
            feels like ${feels}
            <br>
            high bru: ${max}
            <br>
            low bru: ${low}
            <br>
            </p>
        </div>
</div> `)
    }
}


