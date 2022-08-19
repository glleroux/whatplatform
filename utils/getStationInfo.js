import stations from '../stations.json'

const getCrsFromStation = (stationName) => {
    const station = stations.find(station => station.name === stationName)
    return station ? station.crscode : ''
}

const getStationFromCRS = (stationCRS) => {
    const station = stations.find(station => station.crscode === stationCRS)
    return station ? station.name : ''
}

const getLayoutProps = (originCRS='ALL', originName='All Services', destCRS='ALL', destName='All Services') => {
    return {
        origin: {
          crsCode: originCRS,
          name: originName
        },
        dest: {
          crsCode: destCRS,
          name: destName
        }
    }
}

export {getCrsFromStation, getStationFromCRS, getLayoutProps}