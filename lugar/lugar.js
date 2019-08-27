const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '04c8611273mshc81bed00cab7e56p154f1bjsn0b90b7c5d5e5' }
    });

    const respuesta = await instance.get();

    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}