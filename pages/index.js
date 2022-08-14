import { useRouter } from 'next/router';
import { Button } from '../components/button'
import { Input } from '../components/input'
import { useState } from 'react'
import getCrsFromStation from '../utils/getCrsCode'
import getSearchResults from '../utils/getSearchResults';

export default function Home() {

  const [searchResults, setSearchResults] = useState([])
  const [originStation, setOriginStation] = useState('')
  const [destStation, setDestStation] = useState('')

  const handleChange = ({target}) => {
    if (target.id === 'origin') {
      setOriginStation(target.value)
      const newSearchResults = getSearchResults(target.value)
      setSearchResults([].concat(newSearchResults))
    }
    if (target.id === 'dest') {
      setDestStation(target.value)
    }
  }

  const router = useRouter()

  const handleSearch = () => {

    const originCRS = getCrsFromStation(originStation)

    if (!destStation) {
      router.push(`/${originCRS}`)
    } else {
      const destCRS = getCrsFromStation(destStation)
      router.push(`/${originCRS}/${destCRS}`)
    }

  }

  return (
    <>
      <Input id='origin' placeholder='Where are you now?' onChange={handleChange}/>
      <Input id='dest' placeholder='Where are you headed? (optional)' onChange={handleChange}/>
      <Button label={'Find departures'} handleClick={handleSearch}/>  
      {
      searchResults.map(result => <p>{result.item.name}</p>)
      }
    </>
)}
