import styles from '../styles/Home.module.css'
import { TypeWriterText } from 'type-writer-text'
import { Box, Flex, Stack, Grid, Wrap, AspectRatio, SimpleGrid, Heading, WrapItem, Circle, VStack, HStack } from "@chakra-ui/layout"
import Link from 'next/link'
import Image from 'next/image'


const TeamBioCT = () => {  

      var contentArray = new Array
      (
          ["Coming Soon", "Players Year", "Our esports players are currently writing up their bio's for you to read!"],
          ["Matthew", "Senior", "I am the Oakdale Esports web designer and developer. I develop the designs and also build the website.", "/profile/matthew.png"],
          ["Name", "Year", "My role is playing mid lane and coordinating with my team. I've been playing this game for about 2 years.", "/profile/antonio.jpg"],
          ["Name", "Year", "My role is playing mid lane and coordinating with my team. I've been playing this game for about 2 years."]
      );
    return (
        <>

    {/* Content Team */}
        <VStack maxWidth="400px">
            <HStack>
                <img src={contentArray[1][3]} height="120px" width="120px" style={{borderRadius:"50%"}}  />
                <Stack>
                    <h2 style={{lineHeight: "0px"}}>{contentArray[1][0]}</h2>
                    <p>{contentArray[1][1]}</p>
                    <p>{contentArray[1][2]}</p>
                </Stack>
            </HStack>

            <br></br><br></br>

            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h2 style={{lineHeight: "0px"}}>{contentArray[0][0]}</h2>
                    <p>{contentArray[0][1]}</p>
                    <p>{contentArray[0][2]}</p>
                </Stack>
            </HStack>

            <br></br><br></br>

            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h2 style={{lineHeight: "0px"}}>{contentArray[0][0]}</h2>
                    <p>{contentArray[0][1]}</p>
                    <p>{contentArray[0][2]}</p>
                </Stack>
            </HStack>
            </VStack>

            <VStack maxWidth="400px">
            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h2 style={{lineHeight: "0px"}}>{contentArray[0][0]}</h2>
                    <p>{contentArray[0][1]}</p>
                    <p>{contentArray[0][2]}</p>
                </Stack>
            </HStack>

            <br></br><br></br>

            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h2 style={{lineHeight: "0px"}}>{contentArray[0][0]}</h2>
                    <p>{contentArray[0][1]}</p>
                    <p>{contentArray[0][2]}</p>
                </Stack>
            </HStack>

            <br></br><br></br>

            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h2 style={{lineHeight: "0px"}}>{contentArray[0][0]}</h2>
                    <p>{contentArray[0][1]}</p>
                    <p>{contentArray[0][2]}</p>
                </Stack>
            </HStack>
         </VStack>
        </>
    )
}

export default TeamBioCT;