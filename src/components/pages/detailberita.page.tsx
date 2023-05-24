import { Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Navigation from "../ui/molecules/navigation.molecule";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface detailBeritaTypes {
    title: string;
    content: string;
    created_at: string;
}

export default function DetailBerita() {
    const { idBerita } = useParams();
    const [detailBerita, setDetailBerita] = useState<detailBeritaTypes>();
    useEffect(() => {        
        axios.get(`${import.meta.env.VITE_ENDPOINT}berita-detail/${idBerita}`)
            .then((response) => {
                setDetailBerita(response.data.data);                
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Container maxW={'6xl'} my={4}>
            <Flex direction={"column"}>
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
                        href: "/berita-detail" + idBerita,
                        name: detailBerita?.title as string,
                    }
                ]} />                
            </Flex>
            <VStack spacing={4} py={4}>
                <Heading textAlign={'center'}>{detailBerita?.title}</Heading>
                <Text fontSize={'xs'}>{new Date(detailBerita?.created_at as string).toLocaleDateString()}</Text>
                <Text dangerouslySetInnerHTML={{__html: detailBerita?.content as string}} />
            </VStack>
        </Container>
    )
}