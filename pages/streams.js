import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Box, Flex, Stack, Grid, Wrap, AspectRatio, SimpleGrid, Heading } from "@chakra-ui/layout"
import OakdaleHeader from '../components/header'


export default function Home() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Oakdale High Esports | Streams</title>
                <meta name="description" content="Oakdale High School Esports" />
                <link rel="icon" href="/mustanglogo.webp" />
            </Head>

            <main className={styles.main}>
                <OakdaleHeader />

                <br></br><br></br>

                <h1 style={{textAlign: "center"}}>Stream Our Latest Matches</h1>

                <br></br>

                <div className={styles.wrapper}>
                    <Box 
                        className={styles.one} 
                        height="200px" 
                        width="350px" 
                        backgroundColor="#4A5568"
                        borderRadius="10px"
                    >
                        
                    </Box>

                    <Box 
                        className={styles.two} 
                        height="200px" 
                        width="350px" 
                        backgroundColor="#4A5568"
                        borderRadius="10px"
                    >
                        
                    </Box>

                    <Box 
                        className={styles.four} 
                        height="200px" 
                        width="350px" 
                        backgroundColor="#4A5568"
                        borderRadius="10px"
                    >
                        
                    </Box>

                    <Box 
                        className={styles.five} 
                        height="200px" 
                        width="350px" 
                        backgroundColor="#4A5568"
                        borderRadius="10px"
                    >
                        
                    </Box>

                </div>


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

