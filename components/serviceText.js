import styled from "styled-components";
 
const Text = styled.p`
    color: #282828; 
    font-size: 18px;
    font-weight: 400;
`

const ServiceText = ({ service }) => {

    const serviceTime = service.locations[0].gbttBookedDeparture.replace(/(.{2})$/,':$1');
    const serviceOrigin = service.locations[0].description
    const serviceDestination = service.destination[0].description
    
    return (
        <Text>
            The <b>{serviceTime}</b> from <b>{serviceOrigin}</b> to <b>{serviceDestination}</b> will depart from
        </Text>
    )
}

export default ServiceText