import { useRouter } from 'next/router';
import styled from "styled-components";

const Container = styled.div`
    background-color: #ffffff;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    margin-top: 8px;
`

const DepartureTime = styled.p`
    color: #282828;
    font-size: 16px;
    font-weight: 600;
    margin-right: 28px;
` 
const Destination = styled.p`
    color: #282828; 
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 2px;
`
const Operator = styled.p`
    font-size: 12px;
    font-weight: 600;
    color: #28282866;
    margin-top: 2px;
    margin-bottom: 0.5px;
`  

const ServiceResult = ({ service, origin }) => {

    const runDate = service.runDate
    const departureTime = service.locationDetail.gbttBookedDeparture
    const destination = service.locationDetail.destination[0].description
    const operator = service.atocName

    const router = useRouter()

    const handleSelect = () => {
        router.push({
            pathname: `/service/${service.serviceUid}`,
            query: {
                origin,
                runDate
            }
        }, `/service/${service.serviceUid}`)
    }

    
    return (
        <Container onClick={handleSelect}>
            <DepartureTime>{departureTime}</DepartureTime>
            <div>
                <Destination>{destination}</Destination>
                <Operator>{operator}</Operator>
            </div>
        </Container>
    )
}

export default ServiceResult