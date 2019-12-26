const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/322b38b12f2b62d90e7bd8578ac6d450/' + long + ',' + lat
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find coordinates.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees. There is a ' + (body.currently.precipProbability*100) + '% chance of rain.')
        }
    })
}

module.exports = forecast