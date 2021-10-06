import styles from '../styles/Home.module.css'
import Icon from 'supercons'
import Link from 'next/link'
import { Box, Flex, Stack, Grid, Wrap, AspectRatio, SimpleGrid, Heading, HStack } from "@chakra-ui/layout"

const ScheduleBoard = () => {
    return (
        <>
                <div className={styles.wrapper} style={{marginTop: "50px"}}>
                    <Box  className={styles.one} backgroundColor="#40434E" height="200px" borderRadius="20px" textAlign="center" padding="4" marginRight="auto" marginLeft="auto" width="400px">
                        <h1>Upcoming</h1>
                        <Box lineHeight="10px">
                            <h3 style={{ fontWeight: "600" }}>JV | October 19, 2021 | 4:00 PM </h3>
                            <h3 style={{ fontWeight: "600" }}>Varsity | October 21, 2021 | 4:00 PM </h3>
                            <div className={styles.tooltip}>
                            <button className={styles.goBtn}>
                                <span className={styles.tooltiptext}>Will become active once the match has started</span>
                                Go
                            </button>
                            </div>
                            {/* <p style={{ fontWeight: "600", fontSize: "25px", paddingTop: "5px" }}> Check back soon for our schedule</p> */}

                        </Box>
                    </Box>
                    <Box className={styles.two} backgroundColor="#40434E" height="200px" borderRadius="20px" textAlign="center" padding="4" marginRight="auto" marginLeft="auto" width="400px">
                        <h1>Results</h1>
                        <Box>
                            <p style={{ fontWeight: "600", fontSize: "25px", paddingTop: "15px" }}> We don’t have any results yet! </p>
                        </Box>
                    </Box>
                 </div>

        </>
    )
}

export default ScheduleBoard;