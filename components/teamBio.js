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
          ["Ethan Yager", "Freshman", "I play top for league of legends for the JV team. I do game with a controller but I can play on PC."],
          ["Joshua Ziebell", "Sophmore", "I am the bot laner for the league of legends team. I'm a very big gamer, mainly playing fps games like Destiny 2 and Call of Duty."]
      );

    return (
        <>

    {/* League of Legends */}
        <VStack maxWidth="400px" paddingLeft="10px">
        <HStack>
                <img src={loflArray[1][3]} height="120px" width="120px" style={{borderRadius:"50%"}} alt="Profile Picture"  />
                <Stack>
                    <h2 style={{marginBlockEnd: "2px"}}>{loflArray[1][0]}</h2>
                    <p>{loflArray[1][1]}</p>
                    <p>{loflArray[1][2]}</p>
                </Stack>
            </HStack>

            <br></br><br></br>

            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h2 style={{marginBlockEnd: "2px"}}>{loflArray[2][0]}</h2>
                    <p>{loflArray[2][1]}</p>
                    <p>{loflArray[2][2]}</p>
                </Stack>
            </HStack>

            <br></br><br></br>

            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h2 style={{marginBlockEnd: "2px"}}>{loflArray[3][0]}</h2>
                    <p>{loflArray[3][1]}</p>
                    <p>{loflArray[3][2]}</p>
                </Stack>
            </HStack>
            </VStack>

            <VStack maxWidth="400px" paddingRight="10px">
            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h2 sstyle={{marginBlockEnd: "2px"}}>{loflArray[0][0]}</h2>
                    <p>{loflArray[0][1]}</p>
                    <p>{loflArray[0][2]}</p>
                </Stack>
            </HStack>

            <br></br><br></br>

            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h2 style={{marginBlockEnd: "2px"}}>{loflArray[0][0]}</h2>
                    <p>{loflArray[0][1]}</p>
                    <p>{loflArray[0][2]}</p>
                </Stack>
            </HStack>

            <br></br><br></br>

            <HStack>
                <Circle size="120px" bg="#4A5568" />
                <Stack>
                    <h2 style={{marginBlockEnd: "2px"}}>{loflArray[0][0]}</h2>
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