import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Icon from 'supercons'
import { Avatar, AvatarGroup } from "@chakra-ui/react"
import { Box, Flex, Stack, Grid, Wrap, AspectRatio, SimpleGrid, Heading, WrapItem, Circle, VStack, HStack, Center } from "@chakra-ui/layout"



export default function Home() {
  return (
    <>

    <a href="/" className={styles.navlink}>
      <Icon glyph="view-back" size={40} style={{marginTop: "20px"}} />
    </a>

    <div className={styles.container}>
      <Head>
        <title>Oakdale High Esports</title>
        <meta name="description" content="Oakdale High School Esports" />
        <link rel="icon" href="/mustanglogo.webp" />
      </Head>

      <main className={styles.main}>
        
        <br></br>
         <div style={{
             textAlign: "center",
             maxWidth: "700px"
          }}
         >
            <h1>Video Editor</h1><br></br>
            <p>The Oakdale High School Esports team is currently in need of a video editor. Streaming video and editing highlight reels would be the main tasks preformed as the Esports Team Video Editor. </p>
            <p>Experience is desired but it is okay to learn along the way.</p>
            <p>If intrested email: <a style={{textDecoration: "underline", textDecorationStyle: "wavy"}} href="mailto: 2022vandyke-matthew@ojusd.org">2022vandyke-matthew@ojusd.org</a> or <a style={{textDecoration: "underline", textDecorationStyle: "wavy"}} href="mailto: cperez@ojusd.org">cperez@ojusd.org</a></p>
        
            </div>
      </main>

      <br></br>

      {/* Put form in footer */}
      <footer className={styles.footer}>
        <Link href="/streams"><p className={styles.footerLink}>Streams</p></Link>
        <form className={styles.formFooter} action="https://gmail.us6.list-manage.com/subscribe/post?u=6c7b84c6fd110f0881bc19736&amp;id=802f764a2e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <button className={styles.submitBtn} type="submit" id="mc-embedded-subscribe">Stay In the Loop</button>
        </form>
        <Link href="/about"><p className={styles.footerLink}>About</p></Link>
      </footer>
    </div>
    </>
  )
}
