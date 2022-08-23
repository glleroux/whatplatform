import Footer from './footer';
import Header from './header'
import { useRouter } from "next/router";
import Head from 'next/head';

const Layout = ({ children, stationInfo }) => {

    const router = useRouter()
    const pagePath = router.asPath
    const isService = pagePath.includes('service')

    console.log(pagePath)

    const layoutStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        margin: '28px',
        height: 'calc(100vh + -56px)',

    }

    const contentStyle = {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "auto",
        width: "100%",
        maxWidth: '600px'
    };    

    return (
        <>
        <Head>
            <title>What Platform?</title>
            <meta name="title" content="What Platform?"/>
            <meta name="description" content="Find the departure platform of your train up to 30 minutes before it shows on the departure boards."/>
            <meta name="keywords" content="train, platform, depart"/>
            <meta name="robots" content="index, follow"/>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="language" content="English"/>
        </Head>
        <div className="Layout" style={layoutStyle} isService={isService}>
            <Header 
            stationInfo={stationInfo}
            />
            <div className="Content" style={contentStyle}>
                {children}
            </div>
            <Footer/>
        </div>
        </>
    )

}

export default Layout