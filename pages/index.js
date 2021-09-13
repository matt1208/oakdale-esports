import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { TypeWriterText } from 'type-writer-text'
import { Box, Flex, Stack, Grid, Wrap, AspectRatio, SimpleGrid, Heading } from "@chakra-ui/layout"
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


            </main>

            {/* Put form in footer */}
            <footer className={styles.footer}>
                <form className={styles.formFooter} action="https://gmail.us6.list-manage.com/subscribe/post?u=6c7b84c6fd110f0881bc19736&amp;id=802f764a2e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <Link href="/streams"><p className={styles.footerLink}>Streams</p></Link>
                    <input className={styles.formInput} class="required email" id="mce-EMAIL" type="email" id="email" name="email" placeholder="EMAIL" />
                    <button className={styles.submitBtn} type="submit" id="mc-embedded-subscribe">Stay In the Loop</button>
                    <Link href="/about"><p className={styles.footerLink}>About</p></Link>
                </form>
            </footer>
        </div >
    )
}

