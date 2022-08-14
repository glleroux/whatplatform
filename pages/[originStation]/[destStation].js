import styled from 'styled-components';
import ServiceResult from '../../components/serviceResult'
import NoServiceText from '../../components/noServiceText';
import { Button } from '../../components/button';
import {getServicesFromStationToStation} from '../../services/services'
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { getStationFromCRS, getLayoutProps } from '../../utils/getStationInfo';

const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
`

const DestStation = ({ services }) => {

  const router = useRouter()
  const pagePath = router.asPath

  const originCRS = pagePath.substring(1,4)
  const originName = getStationFromCRS(originCRS)
  const destCRS = pagePath.substring(5)
  const destName = getStationFromCRS(destCRS)
  const layoutProps = getLayoutProps(originCRS, originName, destCRS, destName)

  return (
    <Layout stationInfo={layoutProps}>
      {
        services 
        ? 
        <ServicesContainer>
          {services.map(service => <ServiceResult service={service} key={service.serviceUid} origin={originCRS}/>)}
        </ServicesContainer>
        : 
        <>
          <NoServiceText/>
          <Button label='Search again' handleClick={() => router.push('/')}/>
        </>
      }
    </Layout>
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