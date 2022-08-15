import styled from 'styled-components';
import ServiceResult from '../../components/serviceResult'
import NoServiceText from '../../components/noServiceText';
import { Button } from '../../components/button';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { getLayoutProps, getStationFromCRS } from '../../utils/getStationInfo';
import { getServicesFromStation } from '../../services/services';

const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
`

const OriginStation = ({ services }) => {

  const router = useRouter()
  const pagePath = router.asPath

  const originCRS = pagePath.substring(1,4)
  const originName = getStationFromCRS(originCRS)
  const layoutProps = getLayoutProps(originCRS, originName)

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
  const {originStation} = params

  const services = await getServicesFromStation(originStation)

  return {
    props: {services}, // will be passed to the page component as props
  }
}

export default OriginStation