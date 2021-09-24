import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Icon from 'supercons'
import { Avatar, AvatarGroup } from "@chakra-ui/react"
import { Box, Flex, Stack, Grid, Wrap, AspectRatio, SimpleGrid, Heading, WrapItem, Circle, VStack, HStack, Center } from "@chakra-ui/layout"
import TeamBioLofL from '../components/teamBio'



export default function Home() {
    // var name1 = "Matthew";
    // var year1 = "Senior";
    // var bio1 = "Hey its me";

    var bioArray = new Array(["Matthew", "Senior", "Bio"], ["Person 2", "Jr", "Bio2"], ["Gilbert", "Hmm", "Ugh"]);

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

        <Image src="/league.png" height="213.6" width="753.6" alt="League of Legends Banner. Black and white photo of a gamer." />
        

        <br></br>
        
        <Center>
          <HStack>
            <TeamBioLofL />
          </HStack>
        </Center>

      </main>

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
