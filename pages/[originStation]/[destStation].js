import ServiceResult from '../../components/serviceResult'
import {getServicesFromStationToStation} from '../../services/services'
import { useRouter } from 'next/router';

const DestStation = ({ services }) => {

  const { asPath } = useRouter()
  const originCRS = asPath.substring(1,4)

  return (
      services.map(service => <ServiceResult service={service} key={service.serviceUid} origin={originCRS}/>)
  )

}

export async function getServerSideProps(context) {
    const {params} = context
    const {originStation, destStation} = params

    const services = await getServicesFromStationToStation(originStation, destStation)

    return {
      props: {services}, // will be passed to the page component as props
    }
}

export default DestStation