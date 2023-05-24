import { Image, Container, Flex, Heading } from "@chakra-ui/react";
import Navigation from "../ui/molecules/navigation.molecule";
import imgPengurus from "../../assets/images/Pengurus utk website.png";
import { useEffect, useState } from "react";
import axios from "axios";

interface strukturType {
    content: string;
}

export default function Struktur() {
    const [data, setData] = useState<strukturType[]>([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_ENDPOINT}struktur-organisasi`).then((response) => {
            setData(response.data.data.content);
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
                        href: "/struktur-organisasi",
                        name: "Struktur"
                    }
                ]} />
            </Flex>
            
            <Heading my={12} textAlign={'center'}>Struktur Pengurus & Pengawas</Heading>
            <div dangerouslySetInnerHTML={{ __html: data }} />
        </Container>
    )
}