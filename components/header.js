import styles from '../styles/Home.module.css'
import { TypeWriterText } from 'type-writer-text'
import { Box, Flex, Stack, Grid, Wrap, AspectRatio, SimpleGrid, Heading } from "@chakra-ui/layout"
import Link from 'next/link'

const OakdaleHeader = () => {

    return (
        <>
            <div className={styles.bars}></div>
            <div className={styles.barsYellow}></div>
            <Link href="/">
                <h1 className={styles.title}>
                    Oakdale High<br></br><span className={styles.accentText}>Esports</span>
                </h1>
            </Link>
            <div className={styles.barsrightYellow}></div>
            <div className={styles.barsright}></div>
            <br></br>
        </>
    )
}

export default OakdaleHeader;