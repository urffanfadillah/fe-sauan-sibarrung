import { Box, Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Navigation from "../ui/molecules/navigation.molecule";
import { useEffect, useState } from "react";
import { aboutInfoType } from "../../hooks/interfaces/aboutinfo.interface";
import axios from "axios";

export default function Pengurus() {
    const [data, setData] = useState<aboutInfoType>();
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_ENDPOINT}profil-pengurus`)
            .then((response) => {
                setData(response.data);
            });
    }, []);

    return (
        <Container maxW={'6xl'} my={4}>
            <Flex direction={"column"} mb={4}>
                <Navigation links={[
                    {
                        href: "/",
                        name: "Home"
                    },
                    {
                        href: "/profil-pengurus",
                        name: "Profil Pengurus"
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
                {/* <Stack align={'center'} spacing={4}>
                    <Box mt={2}>                        
                        <Text mt={1} fontSize={'sm'} textAlign={"center"} dangerouslySetInnerHTML={{ __html: data?.data.content as string }} />
                    </Box>
                </Stack> */}
                <Image src={data?.data.image_url} width={'6xl'} mx={'auto'} />
            </Box>
        </Container>
    )
}