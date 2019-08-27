const axios = require('axios');

const getClima = async(lat, lng) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d3aa7ff2998f358f494a508d453e4a52&units=metric`)

    return respuesta.data.main.temp
}

module.exports = {
    getClima
}