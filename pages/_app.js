import '../styles/globals.css'
import { usePanelbear } from '@panelbear/panelbear-nextjs';

function MyApp({ Component, pageProps }) {

  usePanelbear('9XlXEMIpq8X');

  return <Component {...pageProps} />
}

export default MyApp
