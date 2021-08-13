import { Fonts } from '../styles/Fonts'
import '../styles/globals.css'
import { DefaultSeo } from 'next-seo';
import SEO from '/next-seo-config';
import { ChakraProvider } from "@chakra-ui/react"


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
