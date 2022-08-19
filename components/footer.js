import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const FooterContainer = styled.div`
    display: flex;
    margin-top: 32px;
    justify-content: center;
    width: calc(100vw + -56px);
    max-width: 600px
`

const Footer = () => {

    const router = useRouter()
    const pagePath = router.asPath

    return (
        <FooterContainer>
            {
                pagePath === '/about'
                    ? <p style={{fontSize: '12px'}}>Made with ⚡️ by G. Leroux</p>
                    : <Link href='/about'><a>About</a></Link>
            }
        </FooterContainer>
    )
}

export default Footer