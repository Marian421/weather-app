import { weatherReport } from "./getWeatherData";

const UI = (() => {

    const loadPage = () => {
        renderPage();
    }

    const renderPage = () => {

        const form = document.createElement("div");
        form.setAttribute("id", "form");

        const city = document.createElement("input");
        city.setAttribute("id", "city");
        city.setAttribute("type", "text");
        city.setAttribute("maxlength", 20);
        city.setAttribute("placeholder", "Location for weather report");

        const submitCity = document.createElement("input");
        submitCity.setAttribute("type", "submit");
        submitCity.setAttribute("name", "submitCity");
        submitCity.setAttribute("id", "submitCity");
        submitCity.value = "Search";

        form.appendChild(city);
        form.appendChild(submitCity);

        document.body.appendChild(form);

        submitCity.addEventListener("click", async (e) => {
            e.preventDefault();
            const location = city.value;
            city.value = "";
            try {
                const weatherData = await weatherReport(location);
                console.log("weather data: ", weatherData);

            } catch (error){
                console.error("Error fetching weather data ", error);
            }
            
        })
    }

    return {loadPage};

})();

export {UI};