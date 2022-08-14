import { useRouter } from "next/router";
import styled from "styled-components";
import Image from 'next/image'
import arrowLeft from '../public/arrow-left.svg'
import arrowRightCircle from '../public/arrow-right-circle.svg'
import checkmarkCircle from '../public/checkmark-circle.svg'
import train from '../public/train.svg'


const iconStyle = {
    'color': '#282828'
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 80px;
    max-width: 350px;
    align-self: stretch;
`
    
const Title = styled.h1`
    font-weight: 700;
    color: #282828;
    font-size: 32px;
    margin: 0;
    text-align: center;
`

const TitleNavContainer = styled.div`
    display: flex;
    justify-content: ${props => props.pagePath === '/' ? 'center' : 'space-between'};
    align-items: center;
    margin-bottom: 48px;
`


const Header = ({ stationInfo }) => {

    const router = useRouter()
    const pagePath = router.asPath

    return (
        <Container>
            <TitleNavContainer>
                {
                    pagePath === '/' 
                        ? <Title>what platform?</Title>
                        : <>
                        <Image 
                            alt='back' 
                            src={arrowLeft} 
                            height={32} 
                            width={32} 
                            style={iconStyle}
                            onClick={() => router.back()}
                        />
                        <Title onClick={() => router.push('/')}>what platform?</Title>  
                        </>
                }
            </TitleNavContainer>
            <StationDisplay stationInfo={stationInfo}/>
        </Container>

    )

}

export default Header

const StationDisplay = ({ stationInfo }) => {

    const stationInfoContainerStyle = {
        'display': 'flex',
        'justifyContent': 'space-between'
    }

    return (
        <>
        <Graphic/>
        <div style={stationInfoContainerStyle}>
            <StationInfo stationInfo={stationInfo.origin}/>
            <StationInfo stationInfo={stationInfo.destination} isDesination={true}/>
        </div>
        </>
    )

}

const DashedLine = styled.hr`
    border: none;
    border-top: 1px dashed #28282866;
    color: #fff;
    background-color: #fff;
    height: 1px;
    width: 40%;
`

const Graphic = () => {

    const graphicContainerStyle = {
        'display': 'flex',
        'marginBottom': '32px'
    }

    return (
        <div style={graphicContainerStyle}>
            <Image alt='arrow-right' src={arrowRightCircle} height={16} width={16} style={iconStyle}/>
            <DashedLine/>
            <Image alt='train-icon' src={train} height={16} width={16} style={iconStyle}/>
            <DashedLine/>
            <Image alt='check-circle' src={checkmarkCircle} height={16} width={16} style={iconStyle}/>
        </div>
    )

}

const StationCRS = styled.h2`
    font-size: 32px;
    font-weight: 500;
    color: #282828;
    margin: 2px 0;
`

const StationName = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #28282866;
`

const StationInfo = ({ isDesination, stationInfo }) => {

    const destinationStyle = {
        'textAlign': 'right'
    }

    return (
        <div style={isDesination ? destinationStyle : {}}>
            <StationCRS>{stationInfo.crs}</StationCRS>
            <StationName>{stationInfo.name}</StationName>
        </div>
    )

}