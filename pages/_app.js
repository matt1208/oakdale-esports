import { Fonts } from '../styles/Fonts'
import '../styles/globals.css'
import { DefaultSeo } from 'next-seo';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Fonts />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
