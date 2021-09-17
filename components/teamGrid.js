import styles from '../styles/Home.module.css'
import { TypeWriterText } from 'type-writer-text'
import { Box, Flex, Stack, Grid, Wrap, AspectRatio, SimpleGrid, Heading } from "@chakra-ui/layout"
import Link from 'next/link'

const TeamGrid = () => {

    return (
        <>
            <Box textAlign="center" color="white">
                <h1>The Teams</h1>
                <SimpleGrid columns={[1, null, 3]} spacing={20} color="white">
                    <Link href="/rocketleague">
                        <Box className={styles.teamCards} height="200px" borderRadius="20px" textAlign="center">
                            <p style={{ fontWeight: "600", fontSize: "25px", paddingTop: "35%" }}>Rocket League</p>
                        </Box>
                    </Link>

                    <Link href="/leagueoflegends">
                        <Box className={styles.teamCards} height="200px" borderRadius="20px" textAlign="center">
                            <p style={{ fontWeight: "600", fontSize: "25px", paddingTop: "30%" }}>League of<br></br>Legends</p>
                        </Box>
                    </Link>

                    {/* <Link href="/comingsoon">
                        <Box className={styles.teamCards} height="200px" borderRadius="20px" textAlign="center">
                            <p style={{ fontWeight: "600", fontSize: "25px", paddingTop: "55%" }}>SMITE</p>
                        </Box>
                    </Link> */}

                    <Link href="/content">
                        <Box className={styles.teamCards} height="200px" borderRadius="20px" textAlign="center">
                            <p style={{ fontWeight: "600", fontSize: "25px", paddingTop: "35%" }}>Content</p>
                        </Box>
                    </Link>
                </SimpleGrid>
            </Box>

        </>
    )
}

export default TeamGrid;