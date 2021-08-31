import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { TypeWriterText } from 'type-writer-text'
import OakdaleHeader from '../components/header'
import { Avatar, AvatarGroup } from "@chakra-ui/react"
import { Box, Flex, Stack, Grid, Wrap, AspectRatio, SimpleGrid, Heading, WrapItem, Circle, VStack, HStack, Center } from "@chakra-ui/layout"
import TeamBioRL from '../components/teamBioRL'



export default function Home() {
    // var name1 = "Matthew";
    // var year1 = "Senior";
    // var bio1 = "Hey its me";

    var bioArray = new Array(["Matthew", "Senior", "Bio"], ["Person 2", "Junior", "Bio2"], ["Gilbert", "Hmm", "Ugh"]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Oakdale High Esports</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/mustanglogo.webp" />
      </Head>

      <main className={styles.main}>

        <Image src="/rocket.png" height="213.6" width="753.6" alt="Rocket League Banner. Black and white photo of a gaming keyboard, including text overlay of Rocket League." />
        
        <br></br>
        
        <Center>
          <HStack>
            <TeamBioRL />
          </HStack>
        </Center>

      </main>

      {/* Put form in footer */}
      <footer className={styles.footer}>
        <form className={styles.formFooter} action="https://gmail.us6.list-manage.com/subscribe/post?u=6c7b84c6fd110f0881bc19736&amp;id=802f764a2e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <input className={styles.formInput} class="required email" id="mce-EMAIL" type="email" id="email" name="email" placeholder="EMAIL" />
          <button className={styles.submitBtn} type="submit" id="mc-embedded-subscribe">Stay In the Loop</button>
        </form>
      </footer>
    </div>
  )
}