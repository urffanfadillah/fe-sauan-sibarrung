import { Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Navigation from "../ui/molecules/navigation.molecule";
import { useEffect, useState } from "react";
import axios from "axios";

interface produkTypes {
    title: string;
    content: string;    
}

export default function ProdukSimpanan() {    
    const [data, setData] = useState<produkTypes>();
    useEffect(() => {        
        axios.get(`${import.meta.env.VITE_ENDPOINT}produk-simpanan`)
            .then((response) => {
                setData(response.data.data.data[0]);
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Container maxW={'6xl'}>
            <Flex direction={"column"}>
                <Navigation links={[
                    {
                        href: "/",
                        name: "Home"
                    },
                    {
                        href: "/produk",
                        name: "Produk"
                    },
                    {
                        href: "/produk-simpanan",
                        name: data?.title as string,
                    }
                ]} />
            </Flex>
            <Flex flexDirection={{base: 'column', md: 'row'}}>
                <VStack spacing={4} py={4} maxW={{ base: 'full', md: '70%' }}>
                    <Heading textAlign={'center'}>{data?.title}</Heading>
                    <Text fontSize={'xs'}>{}</Text>
                    <Text dangerouslySetInnerHTML={{__html: data?.content as string}} />
                </VStack>
            </Flex>
        </Container>
    )
}