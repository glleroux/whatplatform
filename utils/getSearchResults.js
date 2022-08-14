import stations from '../stations'
import Fuse from 'fuse.js'

const options = {
    includeScore: true,
    keys: ['name', 'crscode']
}

const getSearchResults = (query) => {
    const fuse = new Fuse(stations, options)
    console.log(fuse.search(query))
    return fuse.search(query)
}

export default getSearchResults