import {getServiceByUid} from '../../services/services'
import dayjs from 'dayjs'
import { Button } from '../../components/button'
import PlatformCard from '../../components/platformCard'
import ServiceText from '../../components/serviceText'
import Layout from '../../components/layout'
import { useRouter } from 'next/router';
import { getCrsFromStation, getLayoutProps } from '../../utils/getStationInfo'

const ServiceDetail = ({ service }) => {

    const router = useRouter()

    const originCRS = service.locations[0].crs
    const originName = service.locations[0].description
    const destCRS = getCrsFromStation(service.destination[0].description)
    const destName = service.destination[0].description
    const layoutProps = getLayoutProps(originCRS, originName, destCRS, destName)

    return (
        <Layout stationInfo={layoutProps}>
            <ServiceText service={service}/>
            <PlatformCard platformNum={service.locations[0].platform}/>
            <Button label='Finish' handleClick={() => router.push('/')}/>
        </Layout>
    )
    
}

export async function getServerSideProps(context) {

    const params = context.query
    const serviceUid = params.serviceDetail
    const origin = params.origin
    const runDate = params.runDate

    const serviceDate = dayjs(runDate).format('YYYY/MM/DD')

    const fullService = await getServiceByUid(serviceUid, serviceDate)
    const originStationLocDetail = fullService.locations.filter(location => location.crs === origin)
    const service = {...fullService, locations: originStationLocDetail}

    return {
      props: {service}, // will be passed to the page component as props
    }
}

export default ServiceDetail

