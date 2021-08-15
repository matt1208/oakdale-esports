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
            ) : (
                <SimpleGrid columns={2} spacing={20} color="white" marginTop="40">
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
            )
            }

        </>
    )
}

export default ScheduleBoard;