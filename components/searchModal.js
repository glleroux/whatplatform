import styled from "styled-components";
import { useState } from "react";
import {getSearchResults, getPopularStations} from "../utils/getSearchResults";
import { Input } from "./input";
import SearchGroups from "./searchGroups";
import SearchResult from "./searchResult";

const Modal = styled.div`
    background-color: #FFFFFF;
    padding: 28px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto
`
const Cancel = styled.p`
    font-weight: 600;
    margin-left: auto;
`

const SearchModal = ({ searchVisible, setSearchVisible, handleSelection  }) => {

    const cancelContainerStyle = {
        display: "flex",
        height: "54px",
        alignItems: "center"
    }

    const searchModalInputStyle = {
        border: "2px solid #28282866",
        borderRadius: '4px',
        padding: '16px',
        marginBottom: '16px'
    }

    const resultsContainerStyle = {
        marginTop: "16px",
        flex: 1,
        overflow: 'auto'
    }

    const [searchResults, setSearchResults] = useState([])

    const placeholderText = `${searchVisible.input === 'origin' ? 'From' : 'To'} station`
    const popularStations = getPopularStations()

    const handleChange = ({target}) => {  
        const newSearchResults = getSearchResults(target.value)
        setSearchResults([].concat(newSearchResults))
    }

    return (
        <Modal>
            <div style={cancelContainerStyle}>
                <Cancel onClick={() => setSearchVisible({value: false, input: null})}>Cancel</Cancel>
            </div>
            <Input placeholder={placeholderText} style={searchModalInputStyle} onChange={handleChange}/>
            <div style={resultsContainerStyle}>
                {
                    searchResults.length
                    ?
                    searchResults.map(result => <SearchResult name={result.item.name} crs={result.item.crscode} handleClick={handleSelection} key={result.refIndex}/>)
                    :
                    <SearchGroups handleClick={handleSelection}/> 
                } 
            </div>
                
        </Modal>
    )

}

export default SearchModal