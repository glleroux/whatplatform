import { useRouter } from 'next/router';
import { Button } from '../components/button'
import { Input } from '../components/input'
import SearchModal from '../components/searchModal';
import Layout from '../components/layout';
import { useState } from 'react'
import {getCrsFromStation} from '../utils/getStationInfo'

export default function Home() {

  const [searchVisible, setSearchVisible] = useState(false)
  const [selectedStations, setSelectedStations] = useState({origin: '', dest: ''})

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

  const layoutProps = {
    origin: {
      crs: '',
      name: ''
    },
    destination: {
      crs: '',
      name: ''
    }
}

  return (
      searchVisible 
      ? <SearchModal searchVisible={searchVisible} setSearchVisible={setSearchVisible} setSelectedStations={setSelectedStations}/>
      : <>
          <Layout stationInfo={layoutProps}>
            <Input id='origin' placeholder='Where are you now?' onClick={()=> setSearchVisible({value: true, name: 'origin'})}/>
            <Input id='dest' placeholder='Where are you headed? (optional)' onClick={()=> setSearchVisible({value: true, name: 'dest'})}/>
            <Button label={'Find departures'} handleClick={handleSearch}/>  
          {
          // searchResults.map(result => <p key={result.item.crscode}>{result.item.name}</p>)
          }
        </Layout>
      </>

    
)}
