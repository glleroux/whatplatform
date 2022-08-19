import styled from "styled-components";
import SearchResult from "./searchResult";
import { getPopularStations, getRecentStations } from "../utils/getSearchResults";

const GroupSearchesContainer = styled.div`
    background-color: #FFFFFF;
    padding: 16px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const GroupText = styled.p`
    color: #282828; 
    font-size: 20px;
    font-weight: 600;
    pointer-events: none
`

const resultsContainerStyle = {
    flex: 1,
    overflow: 'auto'
}

const SearchGroups = ({ handleClick }) => {

    const popularStations = getPopularStations()
    const recentStations = getRecentStations()

    return (
        <>
            {
                recentStations && 
                <>
                    <GroupSearchesContainer recent>
                        <GroupText>Recent Stations</GroupText>
                    </GroupSearchesContainer>
                    <div style={resultsContainerStyle}>
                        {recentStations.map(station => <SearchResult key={station.crscode} name={station.name} crs={station.crscode} handleClick={handleClick}/>)}
                    </div>
                </>
            }
            <GroupSearchesContainer>
                <GroupText>Popular Stations</GroupText>
            </GroupSearchesContainer>
            <div style={resultsContainerStyle}>
                {popularStations.map(station => <SearchResult key={station.crscode} name={station.name} crs={station.crscode} handleClick={handleClick}/>)}
            </div>
        </>
    )

}

export default SearchGroups