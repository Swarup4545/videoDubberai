import React from 'react'
import { Box, Text, Flex, Container, SimpleGrid } from '@mantine/core';
import { CiLock } from "react-icons/ci";
const page = () => {
    return (
        <>

            <div style={{ backgroundColor: "#17171e" }}>
                <Box bg="#17171e">
                    <Flex
                        mih={50}
                        gap="xl"

                        justify="center"
                        align="center"
                        direction="row"
                        wrap="wrap"
                        mt={320}
                        style={{
                            position: 'sticky',
                            backgroundColor: "#17171e",
                            top: 0,

                            zIndex: 10,
                            padding: '10px',
                        }}
                    >
                        <Text size="xl" fw={700} c="white" >HOW IT WORKS</Text>
                        <Text size="xl" fw={700} c="white">JIONER</Text>
                    </Flex>
                    
                    <Text size="70px" fw={600} c="white"
                        align="center" mt={20}>Audio Cutter</Text>
                    <Text size="35px" fw={380} c="white"
                        align="center" mt={27}>Free editor to trim and cut any audio file online</Text>
                        <Box  justify="center"
                        align="center" mt={40}>
                    <button  style={{borderRadius: "50px", justify:"center",width:"250px",padding:"10px",border:"2px rgb(100 92 192) solid",backgroundColor:"#17171e"}}>
                        <Text size="25px" c="white" p={5}>Brows My file</Text>
                    </button>
                    </Box>
                    <Box h={1} mt={350} bg="gray"></Box>
                    <Container size="2xl" p={50} style={{ zIndex: 100 }}>
                        <SimpleGrid cols={1}>
                            <div>
                                <Text size="50px" fw={380} c="white"
                                    mt={27} mr="auto">How to cut audio</Text>
                            </div>
                            <div style={{
                                borderLeft: '5px ridge rgb(100 92 192)', backgroundColor: "rgba(207, 202, 202, 0.1)",
                                backdropFilter: "blur(10px)", padding: "20px", marginTop: "40px"
                            }}>
                                <Text size="35px" c="white" fw={35}>This app can be used to trim and/or cut audio tracks, remove an audio fragments. Fade in and fade out your music easily to make the audio harmoniously.</Text>
                                <Text size="35px" c="white" fw={35} mt={55}>It fast and easy to use. You can save the audio file in any format (codec parameters are configured)</Text>
                                <Text size="35px" c="white" fw={35} mt={40}>It works directly in the browser, no needs to install any software, is available for mobile devices.</Text>
                            </div>
                            <div>
                                <Flex
                                    direction="row"
                                    wrap="wrap"
                                    gap="lg"
                                    mt={40}
                                >
                                    <CiLock size={35} color="white" />
                                    <Text size="35px" c="white" fw={55}>Privacy and Security Guaranteed</Text>
                                </Flex>
                            </div>
                            <div style={{
                                borderLeft: '5px ridge rgb(100 92 192)', backgroundColor: "rgba(207, 202, 202, 0.1)",
                                backdropFilter: "blur(10px)", padding: "20px", marginTop: "40px"
                            }}>
                                <Text size="35px" c="white" fw={35}>This is serverless app. Your files does not leave your device</Text>
                            </div>
                        </SimpleGrid>

                    </Container>


                </Box>

            </div>
        </>
    )
}

export default page