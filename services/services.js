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
    const response = await axios.get(url, config)
    return response.data   
}

export {getServicesFromStation, getServicesFromStationToStation, getServiceByUid}