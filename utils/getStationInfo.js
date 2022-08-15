import stations from '../stations.json'

const getCrsFromStation = (stationName) => {
    const station = stations.find(station => station.name === stationName)
    return station ? station.crscode : ''
}

const getStationFromCRS = (stationCRS) => {
    const station = stations.find(station => station.crscode === stationCRS)
    return station ? station.name : ''
}

const getLayoutProps = (originCRS, originName, destCRS='ALL', destName='All Services') => {
    return {
        origin: {
          crs: originCRS,
          name: originName
        },
        destination: {
          crs: destCRS,
          name: destName
        }
    }
}

export {getCrsFromStation, getStationFromCRS, getLayoutProps}