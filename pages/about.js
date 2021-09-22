import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Icon from 'supercons'
import { Box, Flex, Stack, Grid, Wrap, AspectRatio, SimpleGrid, Heading, HStack } from "@chakra-ui/layout"
import { useMediaQuery } from '@chakra-ui/react'
import OakdaleHeader from '../components/header'


export default function Home() {
    const [isLargerThan700] = useMediaQuery("(max-width: 700px)");

    return (
        <div className={styles.container}>
            <Head>
                <title>Oakdale High Esports | About</title>
                <meta name="description" content="Oakdale High School Esports" />
                <link rel="icon" href="/mustanglogo.webp" />
            </Head>

            <main className={styles.main}>
                <OakdaleHeader />

                {isLargerThan700 ? (

                <SimpleGrid columns={1} spacing={20} color="white" textAlign="center" maxWidth="700px">
                    <Box>
                        <h1>About Oakdale High<br></br>School Esports</h1>
                        <p>The 2021-22 esports season is the first season for Oakdale High School Esports. <br></br> Our esports program is run through <Link href="https://ccesports.org/">Central California Esports League</Link>, which provides our game play and manages our program.</p>
                        <p>Artwork by OHS teacher Matt McDonald</p>
                    </Box>
                    <Box>
                        <img src="OHS.png" width="369px" height="198.75" alt="OHS Artwork" />
                    </Box>

                    
                    <Box marginTop="20px">
                        <h1>About Esports</h1>
                        <p>Esports is currently the fastest growing sport in California and opening up new opportunities for high school students.</p>
                        <HStack>
                            <Icon glyph="enter" size={40} />
                            <Link href="/funfacts">Fun Facts About Esports</Link>
                        </HStack>
                    </Box>
                    <Box marginTop="20px">
                        <img src="Esports1.png" width="369px" height="198.75" style={{ borderRadius: "10px" }} alt="Black and white image of child at computer gaming." />
                    </Box>
                </SimpleGrid>

            ) : (

            <SimpleGrid columns={2} spacing={20} color="white" maxWidth="700px">
                    <Box>
                        <h1>About Oakdale High<br></br>School Esports</h1>
                        <p>The 2021-22 esports season is the first season for Oakdale High School Esports. <br></br> Our esports program is run through <Link href="https://ccesports.org/">Central California Esports League</Link>, which provides our game play and manages our program.</p>
                        <p>Artwork by OHS teacher Matt McDonald</p>
                    </Box>
                    <Box>
                        <img src="OHS.png" width="369px" height="198.75" alt="OHS Artwork" />
                    </Box>

                    <Box marginTop="40px">
                        <img src="Esports1.png" width="369px" height="198.75" style={{ borderRadius: "10px" }} alt="Black and white image of child at computer gaming." />
                    </Box>
                    <Box marginTop="40px" marginLeft="40px">
                        <h1>About Esports</h1>
                        <p>Esports is currently the fastest growing sport in California and opening up new opportunities for high school students.</p>
                        <HStack>
                            <Icon glyph="enter" size={40} />
                            <Link href="/funfacts">Fun Facts About Esports</Link>
                        </HStack>
                    </Box>
                </SimpleGrid>
                )
            }



            </main>

            {/* Put form in footer */}
            <footer className={styles.footer}>
                <Link href="/streams"><p className={styles.footerLink}>Streams</p></Link>
                <form className={styles.formFooter} action="https://gmail.us6.list-manage.com/subscribe/post?u=6c7b84c6fd110f0881bc19736&amp;id=802f764a2e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <input className={styles.formInput} class="required email" id="mce-EMAIL" type="email" id="email" name="email" placeholder="EMAIL" />
                    <button className={styles.submitBtn} type="submit" id="mc-embedded-subscribe">Stay In the Loop</button>
                </form>
                <Link href="/about"><p className={styles.footerLink}>About</p></Link>
            </footer>
        </div >
    )
}
