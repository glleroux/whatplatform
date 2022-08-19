import Footer from './footer';
import Header from './header'
import { useRouter } from "next/router";

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
        <div className="Layout" style={layoutStyle} isService={isService}>
            <Header 
            stationInfo={stationInfo}
            />
            <div className="Content" style={contentStyle}>
                {children}
            </div>
            <Footer/>
        </div>
    )

}

export default Layout