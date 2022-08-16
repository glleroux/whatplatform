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

export default getSearchResults