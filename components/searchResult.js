import styled from "styled-components";

const Container = styled.div`
    background-color: #FFFFFF;
    padding: 18px 16px;
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
`

const CRS = styled.p`
    color: #28282866;
    font-size: 14px;
    font-weight: 600;

`

const SearchResult = ({ name, crs }) => {
    
    return (
        <Container> 
            <Station>{name}</Station>
            <CRS>{crs}</CRS>
        </Container>
    )
}

export default SearchResult