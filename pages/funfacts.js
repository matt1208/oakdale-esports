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
                <title>Oakdale High Esports | Fun Facts</title>
                <meta name="description" content="Oakdale High School Esports" />
                <link rel="icon" href="/mustanglogo.webp" />
            </Head>

            <main className={styles.main}>
                <OakdaleHeader />
    
                <br></br><br></br>

                <div className={styles.wrapper} style={{marginTop: "30px"}}>

                    <Box className={styles.one} width="560px" height="250px" bg="#4A5568" borderRadius="10px" textAlign="center" padding="10px">
                        <Icon glyph="bolt" size={116} />
                        <h1>Fastest growing sport in California schools</h1>
                    </Box>

                    <Box className={styles.two} width="560px" height="120px" bg="#4A5568" borderRadius="10px" padding="20px">
                    <HStack>
                            <Icon glyph="welcome" size={80} />
                            <h2>Introduction to the gaming industry</h2>
                        </HStack>
                    </Box>

                    <Box className={styles.three} width="560px" height="120px" bg="#4A5568" borderRadius="10px" padding="10px">
                    <HStack>
                            <Icon glyph="payment" size={98} />
                            <h2>Hundreds of colleges awarding millions of scholorships to esports</h2>
                        </HStack>
                    </Box>
                    <Box className={styles.four} width="560px" height="120px" bg="#4A5568" borderRadius="10px" padding="20px">
                        <HStack>
                            <Icon glyph="pin-fill" size={80} />
                            <h2>Grow Character<br></br>Social Skills</h2>
                        </HStack>
                    </Box>

                    <Box className={styles.five} width="560px" height="120px" bg="#4A5568" borderRadius="10px" padding="20px">
                        <HStack>
                            <Icon glyph="pin-fill" size={80} />
                            <h2>GPA Improvement<br></br>STEM Skills</h2>
                        </HStack>
                    </Box>

                </div>

            </main>

            {/* Put form in footer */}
            <footer className={styles.footer}>
                <form className={styles.formFooter} action="https://gmail.us6.list-manage.com/subscribe/post?u=6c7b84c6fd110f0881bc19736&amp;id=802f764a2e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <input className={styles.formInput} class="required email" id="mce-EMAIL" type="email" id="email" name="email" placeholder="EMAIL" />
                    <button className={styles.submitBtn} type="submit" id="mc-embedded-subscribe">Stay In the Loop</button>
                    <Link href="/about"><p className={styles.footerLink}>About</p></Link>
                </form>
            </footer>
        </div >
    )
}

