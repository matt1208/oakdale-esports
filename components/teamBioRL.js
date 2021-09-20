import styles from '../styles/Home.module.css'
import { TypeWriterText } from 'type-writer-text'
import { Box, Flex, Stack, Grid, Wrap, AspectRatio, SimpleGrid, Heading, WrapItem, Circle, VStack, HStack } from "@chakra-ui/layout"
import Link from 'next/link'
import Image from 'next/image'


const TeamBioRL = () => {  

      var rocketLeagueArray = new Array
      (
          ["Coming Soon", "Players Year", "Our esports players are currently writing up their bio's for you to read!"],
          ["Name", "Year", "My role is playing mid lane and coordinating with my team. I've been playing this game for about 2 years."],
          ["Name", "Year", "My role is playing mid lane and coordinating with my team. I've been playing this game for about 2 years.", "/profile/antonio.jpg"],
          ["Name", "Year", "My role is playing mid lane and coordinating with my team. I've been playing this game for about 2 years."]
      );
    return (
        <>

    {/* Rocket League */}
        <VStack maxWidth="400px" paddingLeft="10px">
            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h2 style={{marginBlockEnd: "2px"}}>{rocketLeagueArray[0][0]}</h2>
                    <p>{rocketLeagueArray[0][1]}</p>
                    <p>{rocketLeagueArray[0][2]}</p>
                </Stack>
            </HStack>

            <br></br><br></br>

            <HStack>
                {/* <img src={loflArray[1][3]} height="120px" width="120px" style={{borderRadius:"50%"}}  /> */}
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h2 style={{marginBlockEnd: "2px"}}>{rocketLeagueArray[0][0]}</h2>
                    <p>{rocketLeagueArray[0][1]}</p>
                    <p>{rocketLeagueArray[0][2]}</p>
                </Stack>
            </HStack>

            <br></br><br></br>

            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h2 style={{marginBlockEnd: "2px"}}>{rocketLeagueArray[0][0]}</h2>
                    <p>{rocketLeagueArray[0][1]}</p>
                    <p>{rocketLeagueArray[0][2]}</p>
                </Stack>
            </HStack>
            </VStack>

            <VStack maxWidth="400px" paddingRight="10px">
            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h2 style={{marginBlockEnd: "2px"}}>{rocketLeagueArray[0][0]}</h2>
                    <p>{rocketLeagueArray[0][1]}</p>
                    <p>{rocketLeagueArray[0][2]}</p>
                </Stack>
            </HStack>

            <br></br><br></br>

            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h2 style={{marginBlockEnd: "2px"}}>{rocketLeagueArray[0][0]}</h2>
                    <p>{rocketLeagueArray[0][1]}</p>
                    <p>{rocketLeagueArray[0][2]}</p>
                </Stack>
            </HStack>

            <br></br><br></br>

            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h2 style={{marginBlockEnd: "2px"}}>{rocketLeagueArray[0][0]}</h2>
                    <p>{rocketLeagueArray[0][1]}</p>
                    <p>{rocketLeagueArray[0][2]}</p>
                </Stack>
            </HStack>
         </VStack>
        </>
    )
}

export default TeamBioRL;