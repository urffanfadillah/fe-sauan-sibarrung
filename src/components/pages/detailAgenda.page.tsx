import { Box, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Navigation from "../ui/molecules/navigation.molecule";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface agendaTypes {
    title: string;
    slug: string;
    content: string;
    deskripsi: string;
    image_url: string;
    created_at: Date;
}

export default function DetailAgenda() {
    const { tanggal } = useParams();
    const [listAgenda, setlistAgenda] = useState<agendaTypes[]>([]);
    useEffect(() => {        
        axios.get(`${import.meta.env.VITE_ENDPOINT}agenda-index/${tanggal}`)
            .then((response) => {
                setlistAgenda(response.data.data);
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Container maxW={'6xl'} my={4}>
            <Flex direction={"column"} mb={8}>
                <Navigation links={[
                    {
                        href: "/",
                        name: "Home"
                    },
                    {
                        href: "/berita",
                        name: "Berita"
                    },
                    {
                        href: "/detail-agenda/" + tanggal,
                        name: `Agenda ${tanggal}`
                    }
                ]} />                
            </Flex>
            {
                listAgenda.map((result, index) => (
                    <Box
                        key={index} 
                        border={'1px solid #333333'} 
                        p={2} 
                        borderRadius={'lg'}
                        backgroundColor={'white'}
                    >
                        <Box w="100%" overflow={'hidden'}>
                        <Box borderRadius="lg">
                            <Image
                                transform="scale(1.0)"
                                src={result.image_url}
                                alt={result.title}
                                objectFit="cover"
                                width="100%"
                                height="240px"
                                transition="0.3s ease-in-out"
                            />
                        </Box>
                            <Heading fontSize="sm" marginTop="2">
                                {result.title}
                            </Heading>
                            <Text as="p" fontSize="xs" marginTop="2" dangerouslySetInnerHTML={{ __html: result.deskripsi}} />
                        </Box>
                    </Box>
                ))
            }
        </Container>
    )
}