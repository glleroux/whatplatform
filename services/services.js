import axios from 'axios'

const baseUrl = 'https://api.rtt.io/api/v1/json'
const username = process.env.RTT_USERNAME
const password = process.env.RTT_PASSWORD
const config = {
    auth: {
        username,
        password
    }
}

const getServicesFromStation = async (CRS) => {
    const url = `${baseUrl}/search/${CRS}`
    const response = await axios.get(url, config)
    return response.data.services
}

const getServicesFromStationToStation = async (originCRS, destCRS) => {
    const url = `${baseUrl}/search/${originCRS}/to/${destCRS}`
    const response = await axios.get(url, config)
    return response.data.services
}

const getServiceByUid = async (serviceUid, serviceDate) => {
    const url = `${baseUrl}/service/${serviceUid}/${serviceDate}`
    console.log(url)
    const response = await axios.get(url, config)
    return response.data   
}

const getLocationDetailByCRS = async (serviceUid, serviceDate, origin) => {
    const url = `${baseUrl}/service/${serviceUid}/${serviceDate}`
    console.log(url)
    const response = await axios.get(url, config)
    console.log(response.data.locations[2].origin[0].description)
    return response.data.locations[2].origin[0].description
}

export {getServicesFromStation, getServicesFromStationToStation, getServiceByUid, getLocationDetailByCRS}