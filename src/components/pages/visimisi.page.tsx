import { Image, Container, Flex } from "@chakra-ui/react";
import Navigation from "../ui/molecules/navigation.molecule";
import imgVisiMisi from "../../assets/images/Visi dan Misi utk website.png";

export default function VisiMisiPage() {
    return (
        <Container maxW={'6xl'} my={4}>
            <Flex direction={"column"} mb={4}>
                <Navigation links={[
                    {
                        href: "/",
                        name: "Home"
                    },
                    {
                        href: "/visi-misi",
                        name: "Visi Misi"
                    }
                ]} />
            </Flex>
            
            <Image src={imgVisiMisi} width={'6xl'} mx={'auto'} />
        </Container>
    )
}