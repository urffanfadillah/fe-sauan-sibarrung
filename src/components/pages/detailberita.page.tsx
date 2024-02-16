import { Box, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Navigation from "../ui/molecules/navigation.molecule";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DaftarKomentar from "../ui/organisms/daftarkomentar.organism";

interface detailBeritaTypes {
    title: string;
    content: string;
    created_at: string;
    slug: string;
    image_url: string;
}

export default function DetailBerita() {
    const { idBerita } = useParams();
    const [detailBerita, setDetailBerita] = useState<detailBeritaTypes>({
        title: "",
        content: "",
        created_at: "",
        slug: "",
        image_url: "",
    });
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
                <Image src={detailBerita?.image_url} sx={{ width: '100%', height: {"sm": '200px', "md": '600px'}, objectFit: 'cover' }} />
                <Text dangerouslySetInnerHTML={{__html: detailBerita?.content as string}} />                
                <DaftarKomentar urlSlug={idBerita} />
            </VStack>
        </Container>
    )
}