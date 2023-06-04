import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Navigation from "../ui/molecules/navigation.molecule";
import { useEffect, useState } from "react";
import { aboutInfoType } from "../../hooks/interfaces/aboutinfo.interface";
import axios from "axios";
import KaisunganImage from "../ui/organisms/kaisunganimage.organism";
import GaleriFotoOrg from "../ui/organisms/galerifoto.organism";

export default function GaleriFoto() {
    const [data, setData] = useState<aboutInfoType>();
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_ENDPOINT}kaisungan-about`)
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
                        href: "/galeri-foto",
                        name: "Galeri Foto"
                    }
                ]} />
            </Flex>

            <GaleriFotoOrg />
        </Container>
    )
}