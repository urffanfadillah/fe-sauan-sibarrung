import { Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Navigation from "../ui/molecules/navigation.molecule";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface detailBeritaTypes {    
    content: string;    
}

export default function Komunitas() {    
    const [data, setData] = useState<detailBeritaTypes>();
    useEffect(() => {        
        axios.get(`${import.meta.env.VITE_ENDPOINT}komunitas-kelompok-binaan`)
            .then((response) => {
                setData(response.data.data);                
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
                        href: "komunitas",
                        name: "Komunitas Kelompok Binaan"
                    }
                ]} />                
            </Flex>
            <VStack spacing={4} py={4}>
                <Text dangerouslySetInnerHTML={{__html: data?.content as string}} />
            </VStack>
        </Container>
    )
}