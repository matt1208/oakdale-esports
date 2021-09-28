import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Icon from 'supercons'
import styles from '../styles/Home.module.css'
import { TypeWriterText } from 'type-writer-text'
import { Box, Flex, Stack, Grid, Wrap, AspectRatio, SimpleGrid, Heading, HStack, Center } from "@chakra-ui/layout"
import TeamGrid from '../components/teamGrid'
import { useMediaQuery } from '@chakra-ui/react'
import ScheduleBoard from '../components/scheduleBoard'
import OakdaleHeader from '../components/header'


export default function Home() {
    const [isLargerThan700] = useMediaQuery("(max-width: 700px)");

    return (
        <div className={styles.container}>
            <Head>
                <title>Oakdale High Esports</title>
                <meta name="description" content="Oakdale High School Esports" />
                <link rel="icon" href="/mustanglogo.webp" />
            </Head>

            <main className={styles.main}>
                <OakdaleHeader />

                <ScheduleBoard />

                <br></br>

                <TeamGrid />

                <br></br>

                <div className={styles.alert}>
                  <Center>
                  <Link href="/videoeditor">
                    <HStack>
                            <Icon glyph="important" size={40} />
                            <p>Intrested in Video Creation?</p>
                    </HStack>
                    </Link>

                  </Center>
                </div>


            </main>

            {/* Put form in footer */}
            <footer className={styles.footer}>
                <Link href="/streams"><p className={styles.footerLink}>Streams</p></Link>
                <form className={styles.formFooter} action="https://gmail.us6.list-manage.com/subscribe/post?u=6c7b84c6fd110f0881bc19736&amp;id=802f764a2e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <button className={styles.submitBtn} type="submit" id="mc-embedded-subscribe">Stay In the Loop</button>
                </form>
                <Link href="/about"><p className={styles.footerLink}>About</p></Link>
            </footer>
        </div >
    )
}

