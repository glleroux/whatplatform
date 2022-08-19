import stations from '../stations'
import Fuse from 'fuse.js'
import { getFromStorage } from './localStorage'

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
    const frequentStations = getFromStorage('frequentStations')
    if (!frequentStations) {
        return null
    }
    const withCRS = frequentStations.map((frequentStation) => {
        const crscode = stations.find(station => station.name === frequentStation.name).crscode
        return {...frequentStation, crscode} 
    })
    return withCRS.sort((a,b) => b.count - a.count)
}

export {getSearchResults, getPopularStations, getRecentStations}