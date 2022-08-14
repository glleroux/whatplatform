import ServiceResult from '../../components/serviceResult'
import {getServicesFromStation} from '../../services/services'
import { useRouter } from 'next/router';

const OriginStation = ({ services }) => {

  const { asPath } = useRouter()
  const originCRS = asPath.substring(1)

  return (
      services.map(service => <ServiceResult service={service} key={service.serviceUid} origin={originCRS}/>)
  )

}

export async function getServerSideProps(context) {
  const {params} = context
  const {originStation} = params

  const services = await getServicesFromStation(originStation)

  return {
    props: {services}, // will be passed to the page component as props
  }
}

export default OriginStation