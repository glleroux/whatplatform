import styled from "styled-components";

const Container = styled.div`
    background-color: #FFFFFF;
    padding: 18px 16px;
    display: flex;
    align-items: center;
    &:hover {
        background-color: #F9F9F9;
    }
`

const Station = styled.p`
    color: #282828; 
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 2px;
`

const SearchResult = ({ name }) => {
    
    return (
        <Container> 
            <Station>{name}</Station>
        </Container>
    )
}

export default SearchResult