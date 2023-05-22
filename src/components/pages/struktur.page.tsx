import { Image, Container, Flex, Heading } from "@chakra-ui/react";
import Navigation from "../ui/molecules/navigation.molecule";
import imgPengurus from "../../assets/images/Pengurus utk website.png";

export default function Struktur() {
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
            <Image src={imgPengurus} maxW={{base: 'full', md:'6xl'}} mx={'auto'} />
        </Container>
    )
}