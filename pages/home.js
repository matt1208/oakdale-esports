import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { TypeWriterText } from 'type-writer-text'
import { Box, Flex, Stack, Grid, Wrap, AspectRatio, SimpleGrid, Heading } from "@chakra-ui/layout"


export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Oakdale High Esports</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/mustanglogo.webp" />
            </Head>

            <main className={styles.main}>
                <div className={styles.bars}></div>
                <div className={styles.barsYellow}></div>
                <h1 className={styles.title}>
                    Oakdale High<br></br><span className={styles.accentText}>Esports</span>
                </h1>

                <div className={styles.barsrightYellow}></div>
                <div className={styles.barsright}></div>

                <SimpleGrid columns={[1, null, 2]} spacing={20} color="white" marginTop="40">
                    <Box backgroundColor="#40434E" height="200px" borderRadius="20px" textAlign="center" padding="4">
                        <h1>Upcoming</h1>
                        <Box >
                            {/* <p style={{ fontWeight: "600" }}> October 5, 2021 | 4:00 PM </p>
                            <SimpleGrid columns={2} spacing={10}>
                                <p style={{ fontWeight: "600" }}>VS</p>
                                <button className={styles.goBtn}>Go</button>
                            </SimpleGrid> */}
                            <p style={{ fontWeight: "600", fontSize: "25px", paddingTop: "5px" }}> Check back soon for our schedule. </p>

                        </Box>
                    </Box>
                    <Box backgroundColor="#40434E" height="200px" borderRadius="20px" textAlign="center" padding="2">
                        <h1>Results</h1>
                        <Box>
                            <p style={{ fontWeight: "600", fontSize: "25px", paddingTop: "15px" }}> We don’t have any results yet! </p>
                        </Box>
                    </Box>
                </SimpleGrid>

                <br></br>

                <Box textAlign="center" color="white">
                    <h1>The Teams</h1>
                    <SimpleGrid columns={[1, null, 4]} spacing={20} color="white">
                        <Box className={styles.teamCards} height="200px" borderRadius="20px" textAlign="center">
                            <p style={{ fontWeight: "600", fontSize: "25px", paddingTop: "55%" }}>Rocket League</p>
                        </Box>
                        <Box className={styles.teamCards} height="200px" borderRadius="20px" textAlign="center">
                            <p style={{ fontWeight: "600", fontSize: "25px", paddingTop: "45%" }}>League of<br></br>Legends</p>
                        </Box>
                        <Box className={styles.teamCards} height="200px" borderRadius="20px" textAlign="center">
                            <p style={{ fontWeight: "600", fontSize: "25px", paddingTop: "55%" }}>SMITE</p>
                        </Box>
                        <Box className={styles.teamCards} height="200px" borderRadius="20px" textAlign="center">
                            <p style={{ fontWeight: "600", fontSize: "25px", paddingTop: "55%" }}>Content</p>
                        </Box>
                    </SimpleGrid>
                </Box>


            </main>

            {/* Put form in footer */}
            <footer className={styles.footer}>
                <form className={styles.formFooter} action="https://gmail.us6.list-manage.com/subscribe/post?u=6c7b84c6fd110f0881bc19736&amp;id=802f764a2e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <input className={styles.formInput} class="required email" id="mce-EMAIL" type="email" id="email" name="email" placeholder="EMAIL" />
                    <button className={styles.submitBtn} type="submit" id="mc-embedded-subscribe">Stay In the Loop</button>
                </form>
            </footer>
        </div >
    )
}