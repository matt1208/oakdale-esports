import styles from '../styles/Home.module.css'
import { TypeWriterText } from 'type-writer-text'
import { Box, Flex, Stack, Grid, Wrap, AspectRatio, SimpleGrid, Heading, WrapItem, Circle, VStack, HStack } from "@chakra-ui/layout"
import Link from 'next/link'
import Image from 'next/image'


const TeamBioLofL = () => {  
      var loflArray = new Array
      (
          ["Coming Soon", "Players Year", "Our esports players are currently writing up their bio's for you to read!"],
          ["Antonio", "Junior", "My role is playing mid lane and coordinating with my team. I've been playing this game for about 2 years.", "/profile/antonio.jpg"],
          ["Matthew", "Senior", "My role is playing mid lane and coordinating with my team. I've been playing this game for about 2 years."],
          ["Gilbert", "Hmm", "My role is playing mid lane and coordinating with my team. I've been playing this game for about 2 years."]
      );

      var rocketLeagueArray = new Array
      (
          ["Coming Soon", "Players Year", "Our esports players are currently writing up their bio's for you to read!"],
          ["Name", "Year", "My role is playing mid lane and coordinating with my team. I've been playing this game for about 2 years."],
          ["Name", "Year", "My role is playing mid lane and coordinating with my team. I've been playing this game for about 2 years.", "/profile/antonio.jpg"],
          ["Name", "Year", "My role is playing mid lane and coordinating with my team. I've been playing this game for about 2 years."]
      );
    return (
        <>

    {/* League of Legends */}
        <VStack maxWidth="400px">
        <HStack>
                <img src={loflArray[1][3]} height="120px" width="120px" style={{borderRadius:"50%"}} alt="Profile Picture"  />
                <Stack>
                    <h3 style={{lineHeight: "0px"}}>{loflArray[1][0]}</h3>
                    <p>{loflArray[1][1]}</p>
                    <p>{loflArray[1][2]}</p>
                </Stack>
            </HStack>

            <br></br><br></br>

            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h3 style={{lineHeight: "0px"}}>{loflArray[0][0]}</h3>
                    <p>{loflArray[0][1]}</p>
                    <p>{loflArray[0][2]}</p>
                </Stack>
            </HStack>

            <br></br><br></br>

            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h3 style={{lineHeight: "0px"}}>{loflArray[0][0]}</h3>
                    <p>{loflArray[0][1]}</p>
                    <p>{loflArray[0][2]}</p>
                </Stack>
            </HStack>
            </VStack>

            <VStack maxWidth="400px">
            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h3 style={{lineHeight: "0px"}}>{loflArray[0][0]}</h3>
                    <p>{loflArray[0][1]}</p>
                    <p>{loflArray[0][2]}</p>
                </Stack>
            </HStack>

            <br></br><br></br>

            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h3 style={{lineHeight: "0px"}}>{loflArray[1][0]}</h3>
                    <p>{loflArray[0][1]}</p>
                    <p>{loflArray[0][2]}</p>
                </Stack>
            </HStack>

            <br></br><br></br>

            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h3 style={{lineHeight: "0px"}}>{loflArray[0][0]}</h3>
                    <p>{loflArray[0][1]}</p>
                    <p>{loflArray[0][2]}</p>
                </Stack>
            </HStack>
         </VStack>
        </>
    )
}

export default TeamBioLofL;


// heres the plan 
// create a list of info for each member
// then pass that persons info in for each member though like classes? 
// just define someones info and then it passes in? this doesn't make sense