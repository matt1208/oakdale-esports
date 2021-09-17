import styles from '../styles/Home.module.css'
import { TypeWriterText } from 'type-writer-text'
import { Box, Flex, Stack, Grid, Wrap, AspectRatio, SimpleGrid, Heading } from "@chakra-ui/layout"
import { useMediaQuery } from '@chakra-ui/react'

const ScheduleBoard = () => {
    const [isLargerThan700] = useMediaQuery("(max-width: 700px)");
    return (
        <>
            {isLargerThan700 ? (

                <SimpleGrid columns={1} spacing={20} color="white" marginTop="40">
                    <Box backgroundColor="#40434E" height="200px" borderRadius="20px" textAlign="center" padding="4">
                        <h1>Upcoming</h1>
                        <Box lineHeight="10px">
                            <h4 style={{ fontWeight: "600" }}>JV | October 5, 2021 | 4:00 PM </h4>
                            <h4 style={{ fontWeight: "600" }}>Varsity | October 7, 2021 | 4:00 PM </h4>
                            <button className={styles.goBtn}>
                                Go
                            </button>
                            {/* <p style={{ fontWeight: "600", fontSize: "25px", paddingTop: "5px" }}> Check back soon for our schedule</p> */}

                        </Box>
                    </Box>
                    <Box backgroundColor="#40434E" height="200px" borderRadius="20px" textAlign="center" padding="2">
                        <h1>Results</h1>
                        <Box>
                            <p style={{ fontWeight: "600", fontSize: "25px", paddingTop: "15px" }}> We don’t have any results yet! </p>
                        </Box>
                    </Box>
                </SimpleGrid>
            ) : (
                <SimpleGrid columns={2} spacing={20} color="white" marginTop="40">
                    <Box backgroundColor="#40434E" height="200px" borderRadius="20px" textAlign="center" padding="4" width="400px">
                        <h1>Upcoming</h1>
                        <Box lineHeight="10px">
                            <h3 style={{ fontWeight: "600" }}>JV | October 5, 2021 | 4:00 PM </h3>
                            <h3 style={{ fontWeight: "600" }}>Varsity | October 7, 2021 | 4:00 PM </h3>
                            <div className={styles.tooltip}>
                            <button className={styles.goBtn}>
                                <span className={styles.tooltiptext}>Will become active once the match has started</span>
                                Go
                            </button>
                            </div>
                            {/* <p style={{ fontWeight: "600", fontSize: "25px", paddingTop: "5px" }}> Check back soon for our schedule</p> */}

                        </Box>
                    </Box>
                    <Box backgroundColor="#40434E" height="200px" borderRadius="20px" textAlign="center" padding="2">
                        <h1>Results</h1>
                        <Box>
                            <p style={{ fontWeight: "600", fontSize: "25px", paddingTop: "15px" }}> We don’t have any results yet! </p>
                        </Box>
                    </Box>
                </SimpleGrid>
            )
            }

        </>
    )
}

export default ScheduleBoard;