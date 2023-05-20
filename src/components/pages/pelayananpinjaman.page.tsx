import { Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Navigation from "../ui/molecules/navigation.molecule";
import { useEffect, useState } from "react";
import axios from "axios";

interface produkTypes {
    title: string;
    content: string;
    image_url: string;
}

export default function ProdukSimpanan() {    
    const [data, setData] = useState<produkTypes[]>([]);
    useEffect(() => {        
        axios.get(`${import.meta.env.VITE_ENDPOINT}pelayanan-pinjaman`)
            .then((response) => {
                setData(response.data.data);
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
                        href: "#",
                        name: "Produk"
                    },
                    {
                        href: "/pelayanan-pinjaman",
                        name: "Pelayanan Pinjaman",
                    }
                ]} />
            </Flex>
            { data.map((result, index) => 
                <Flex flexDirection={{base: 'column', md: 'row'}} key={index}>
                    <VStack spacing={4} py={4} maxW={{ base: 'full', md: '70%' }}>
                        <Heading textAlign={'center'}>{result?.title}</Heading>
                        <Text fontSize={'xs'}>{}</Text>
                        <Text dangerouslySetInnerHTML={{__html: result?.content as string}} />
                    </VStack>
                    <VStack maxW={{ base: 'full', md: '30%' }} py={4}>
                        <Image src={result?.image_url} />
                    </VStack>
                </Flex>
            ) }
        </Container>
    )
}