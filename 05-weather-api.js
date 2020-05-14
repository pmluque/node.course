axios = require('axios');

const getWeather = async(lat, lng) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=192e99203deb153777bdb45d7ff30db3&units=metric`

    const resp = await axios.get(url);
    // espera a recibir la respuesta y podemos retornar
    return resp.data.main.temp;
}

module.exports = {
    getWeather
}