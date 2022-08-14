import {getServiceByUid, getLocationDetailByCRS} from '../../services/services'
import dayjs from 'dayjs'
import { Button } from '../../components/button'
import PlatformCard from '../../components/platformCard'
import ServiceText from '../../components/serviceText'
import { useRouter } from 'next/router';

const ServiceDetail = ({ service }) => {

    const router = useRouter()

    const handleFinish = () => {
        router.replace('/')
    }

    console.log(service)

    return (
        <>
        <ServiceText service={service}/>
        <PlatformCard platformNum={service.locations[0].platform}/>
        <Button label='Finish' handleClick={handleFinish}/>
        </>
    )
    
}

export async function getServerSideProps(context) {

    const params = context.query
    const serviceUid = params.serviceDetail
    const origin = params.origin

    const serviceDate = dayjs().format('YYYY/MM/DD')

    const fullService = await getServiceByUid(serviceUid, serviceDate)
    const originStationLocDetail = fullService.locations.filter(location => location.crs === origin)
    const service = {...fullService, locations: originStationLocDetail}
    // const currentStationLocationDetail = fullService.locations.filter(location => location.crs = origin)
    // const service = {...fullService, locations: currentStationLocationDetail}

    return {
      props: {service}, // will be passed to the page component as props
    }
}

export default ServiceDetail

