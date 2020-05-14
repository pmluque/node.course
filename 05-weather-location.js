/* HTTP status
    200 ok
    400 error en la url de la petición -> bad request : mala solicitud
    404 not found resource
    500 server error
*/

// https://www.npmjs.com/package/axios
axios = require('axios');

const getLatLng = async(location) => {

    // El API tiene las "ñ" como "n" y no contempla acentos
    const _location = location.replace(/ñ/gi, "n")
        .replace(/á/gi, "a")
        .replace(/é/gi, "e")
        .replace(/í/gi, "i")
        .replace(/ó/gi, "o")
        .replace(/ú/gi, "u");

    // A continuación se codifica para que sea urlfriendly
    const encodeUrl = encodeURI(_location);
    //console.log(encodeUrl);

    const request = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': '142f682b75msh3e1055bd876e60cp1677e5jsnb972c87fbb18' }
    });

    const resp = await request.get();
    if (resp.data.Results[0].length === 0) {
        throw new Error(`No se localizo info sobre ${location}`);
    }

    const data = resp.data.Results[0];
    const address = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        address,
        lat,
        lng
    }

}

module.exports = {
    getLatLng
}