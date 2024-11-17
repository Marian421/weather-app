const weatherReport = async (location) => {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=DSRGUVMHULCYS64KKPB2BX4HR&contentType=json` ;
    const response = await fetch(url, {mode: 'cors'});

    return  await response.json();

}

export { weatherReport };