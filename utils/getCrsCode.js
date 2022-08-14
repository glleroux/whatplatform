import stations from '../stations.json'

const getCrsFromStation = (stationName) => {
    console.log(stationName)
    const station = stations.find(station => station.name === stationName)
    return station.crscode
}

export default getCrsFromStation