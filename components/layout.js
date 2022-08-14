import Header from './header'

const Layout = ({ children, stationInfo }) => {

    const layoutStyle = {
        display: "flex",
        flexDirection: "column",
    }

    const contentStyle = {
        flex: 1,
        display: "flex",
        flexDirection: "column"
    };    

    return (
        <div className="Layout" style={layoutStyle}>
            <Header 
            stationInfo={stationInfo}
            />
            <div className="Content" style={contentStyle}>
                {children}
            </div>
        </div>
    )

}

export default Layout