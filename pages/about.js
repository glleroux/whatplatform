import Head from "next/head"
import Script from "next/script"
import styled from "styled-components"
import Layout from "../components/layout"

const Text = styled.p`
    color: #282828;
    line-height: 150%;
    margin-top: 16px;
    text-align: center;
`



const About = () => {

    return (
        <Layout>
            <Text>
                What Platform? shows you the platform your train will be departing from — up to 30 minutes before it appears on departure boards — allowing you to beat the rush hour rush.
            </Text>
            <Text>Data kindly provided by <a href="https://www.realtimetrains.co.uk/">Realtime Trains</a>.</Text>
            <Text style={{marginTop: '48px'}}>If this has helped you out, then <a href="https://www.buymeacoffee.com/gleroux">Buy Me a Coffee</a>.</Text>
        </Layout>
    )

}

export default About

