import styled from "styled-components";

const Container = styled.div`
    background-color: #FFFFFF;
    padding: 12px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
        background-color: #F9F9F9;
    }
`

const Station = styled.p`
    color: #282828; 
    font-size: 16px;
    font-weight: 600;
    pointer-events: none
`

const CRS = styled.p`
    color: #28282866;
    font-size: 14px;
    font-weight: 600;
    pointer-events: none

`

const SearchResult = ({ name, crs, handleClick }) => {
    
    return (
        <Container data-crscode={crs} data-stationname={name} onClick={handleClick}> 
            <Station>{name}</Station>
            <CRS>{crs}</CRS>
        </Container>
    )
}

export default SearchResult