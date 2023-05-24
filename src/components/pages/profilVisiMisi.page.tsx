import { Flex, Text } from "@chakra-ui/react";
import Navigation from "../ui/molecules/navigation.molecule";
import AboutProfil from "../ui/organisms/aboutProfil.organism";
import Feature from "../ui/organisms/feature.organism";

export default function ProfilVisiMisi() {
    return (
        <Flex direction={"column"} my={4}>
            <Navigation links={[
                {
                    href: "/",
                    name: "Home"
                },
                {
                    href: "/profil",
                    name: "Profil"
                }
            ]} />
            <AboutProfil />
            <Feature />
        </Flex>
    )
}