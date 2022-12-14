import { useRouter } from 'next/router';
import { Button } from '../components/button'
import { Input } from '../components/input'
import SearchModal from '../components/searchModal';
import Layout from '../components/layout';
import { useState } from 'react'
import { setToStorage } from '../utils/localStorage';

export default function Home() {

  const [searchVisible, setSearchVisible] = useState({value: false, input: null})
  const [selectedStations, setSelectedStations] = useState({
    origin: {name: '', crsCode: ''}, 
    dest: {name: '', crsCode: ''}
  })

  const router = useRouter()

  const handleSelection = ({ target }) => {
    const name = target.dataset.stationname
    const crsCode = target.dataset.crscode

    setSelectedStations({...selectedStations, [searchVisible.input]: {
      name,
      crsCode
    }})
    setSearchVisible({value: false, input: null})
  }

  const handleSearch = () => {
    const originCRS = selectedStations.origin.crsCode

    if (!selectedStations.dest) {
      router.push(`/${originCRS}`)
    } else {
      const destCRS = selectedStations.dest.crsCode
      router.push(`/${originCRS}/${destCRS}`)
    }
    console.log('searching: ', selectedStations)
    setToStorage(selectedStations) 
  }

  return (
      searchVisible.value 
      ? <SearchModal searchVisible={searchVisible} setSearchVisible={setSearchVisible} handleSelection={handleSelection}/>
      : <>
          <Layout stationInfo={selectedStations}>
            <Input id='origin' placeholder='Where are you now?' onClick={()=> setSearchVisible({value: true, input: 'origin'})} value={selectedStations.origin.name} readOnly={true}/>
            <Input id='dest' placeholder='Where are you headed? (optional)' onClick={()=> setSearchVisible({value: true, input: 'dest'})} value={selectedStations.dest.name} readOnly={true}/>
            <Button label={'Find departures'} handleClick={handleSearch}/>  
          {
          // searchResults.map(result => <p key={result.item.crscode}>{result.item.name}</p>)
          }
        </Layout>
      </>

    
)}
