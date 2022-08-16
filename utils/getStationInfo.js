import stations from '../stations.json'

const getStationFromCRS = (stationCRS) => {
    const station = stations.find(station => station.crscode === stationCRS)
    return station ? station.name : ''
}

const getLayoutProps = (originCRS, originName, destCRS='ALL', destName='All Services') => {
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

// export {getCrsFromStation, getStationFromCRS, getLayoutProps}
export {getStationFromCRS, getLayoutProps}