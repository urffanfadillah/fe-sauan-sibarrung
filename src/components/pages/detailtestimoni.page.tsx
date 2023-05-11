import { Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Navigation from "../ui/molecules/navigation.molecule";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface detailBeritaTypes {
    title: string;
    content: string;
    created_at: Date;
    image_url: string;
}

export default function DetailTestimoni() {
    const { slugTestimoni } = useParams();
    const [detailTestimoni, setDetailTestimoni] = useState<detailBeritaTypes>();
    useEffect(() => {        
        axios.get(`${import.meta.env.VITE_ENDPOINT}kisah-sukses/${slugTestimoni}`)
            .then((response) => {
                setDetailTestimoni(response.data.data);
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
                        href: "testimoni",
                        name: "Testimoni"
                    },
                    {
                        href: "/berita-detail" + slugTestimoni,
                        name: detailTestimoni?.title as string,
                    }
                ]} />                
            </Flex>
            <VStack spacing={4} py={4}>
                <Image
                    src={detailTestimoni?.image_url}
                    w={32}
                    h={32}
                    rounded={'lg'}
                    />
                <Heading textAlign={'center'}>{detailTestimoni?.title}</Heading>
                <Text dangerouslySetInnerHTML={{__html: detailTestimoni?.content as string}} />
            </VStack>
        </Container>
    )
}