import styled from "styled-components";
 
const Text = styled.p`
    color: #282828; 
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 32px;
`

const NoServiceText = () => {
    
    return (
        <Text>
            Sorry. No services were found in the next two hours.
        </Text>
    )
}

export default NoServiceText