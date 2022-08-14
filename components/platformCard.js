import styled from "styled-components";

const Container = styled.div`
    background-color: #ffffff;
    padding: 44px 40px 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 208px;
    border-radius: 14px;
`

const Platform = styled.p`
    color: #282828; 
    font-size: 24px;
    font-weight: 500;
` 
const PlatformNum = styled.p`
    color: #282828; 
    font-size: 100px;
    font-weight: 600;
`

const PlatformCard = ({ platformNum }) => {
    
    return (
        <Container>
            <Platform>PLATFORM</Platform>
            <PlatformNum>{platformNum}</PlatformNum>
        </Container>
    )
}

export default PlatformCard