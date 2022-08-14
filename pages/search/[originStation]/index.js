import Service from '../../components/service'
import {getServicesFromStation} from '../../services/services'

const OriginStation = ({ services }) => {

  return (
      services.map(service => <Service service={service} key={service.serviceUid}/>)
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