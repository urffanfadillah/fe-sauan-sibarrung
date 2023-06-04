import { Image, Container, Flex, Heading } from "@chakra-ui/react";
import Navigation from "../ui/molecules/navigation.molecule";
import imgPengurus from "../../assets/images/Pengurus utk website.png";
import { useEffect, useState } from "react";
import axios from "axios";

interface strukturType {
    content: string;
    image_url: string;
}

export default function Struktur() {
    const [data, setData] = useState<strukturType>({
        content: '',
        image_url: ''
    });
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_ENDPOINT}struktur-organisasi`).then((response) => {
            setData(response.data.data);
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
                        href: "/struktur-organisasi",
                        name: "Struktur Organisasi"
                    }
                ]} />
            </Flex>
            
            <Heading my={12} textAlign={'center'}>Struktur Organisasi</Heading>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </Container>
    )
}