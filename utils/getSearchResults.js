import stations from '../stations'
import Fuse from 'fuse.js'

const options = {
    includeScore: true,
    keys: ['name', 'crscode']
}

const getSearchResults = (query) => {
    const fuse = new Fuse(stations, options)
    return fuse.search(query)
}

export default getSearchResults