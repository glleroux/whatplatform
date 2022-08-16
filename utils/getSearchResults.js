import stations from '../stations'
import Fuse from 'fuse.js'

const options = {
    includeScore: true,
    keys: ['name', 'crscode'],
    threshold: 0.2
}

const getSearchResults = (query) => {
    const fuse = new Fuse(stations, options)
    const results = fuse.search(query)
    return results.slice(0,12)
}

const getPopularStations = () => {

    const popularStationNames = [
        'London Euston',
        'London Paddington',
        'Birmingham New Street',
        'Leeds',
        'Manchester Piccadilly',
        'Edinburgh (Waverley)',
        'Sheffield',
        'Newcastle',
        'London Kings Cross',
        'London Liverpool Street'
    ]

    return stations.filter(station => popularStationNames.includes(station.name))
}

const getRecentStations = () => {
    return
}

export {getSearchResults, getPopularStations, getRecentStations}