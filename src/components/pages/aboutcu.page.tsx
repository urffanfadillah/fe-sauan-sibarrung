import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Navigation from "../ui/molecules/navigation.molecule";
import { useEffect, useState } from "react";
import { aboutInfoType } from "../../hooks/interfaces/aboutinfo.interface";
import axios from "axios";

export default function AboutCU() {
    const [visiMisi, setVisiMisi] = useState<aboutInfoType>();
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_ENDPOINT}about-cu`)
            .then((response) => {
                setVisiMisi(response.data);
            });
    }, []);

    return (
        <Container maxW={'6xl'}>
            <Flex direction={"column"} mb={4}>
                <Navigation links={[
                    {
                        href: "/",
                        name: "Home"
                    },
                    {
                        href: "/about-cu",
                        name: "About CU"
                    }
                ]} />
            </Flex>
            
            <Box
                maxW={{ base: 'full' }}
                w={'full'}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={5}
                backgroundColor={"#ffffff"}
                border={"1px solid #e7e7e7"}
                >
                <Stack align={'center'} spacing={4}>
                    <Box mt={2}>                        
                        <Text mt={1} fontSize={'sm'} textAlign={"center"} dangerouslySetInnerHTML={{ __html: visiMisi?.data.content as string }} />
                    </Box>
                </Stack>
            </Box>
        </Container>
    )
}