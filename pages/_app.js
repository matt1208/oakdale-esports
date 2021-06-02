import { Fonts } from '../styles/Fonts'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Fonts />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
