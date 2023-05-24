import Feature from "../ui/organisms/feature.organism"
import Carousel from "../ui/organisms/carousel.organism"
import Blog from "../ui/organisms/blog.organism"
import { Container, Flex, Heading, Image, VStack } from "@chakra-ui/react"
import imgKalkulatorMenurun from "../../assets/images/Kalkulator Bunga Menurun.png"
import imgKalkulatorTetap from "../../assets/images/Kalkulator setoran tetap.png"
import { Link } from "react-router-dom"
import Videos from "../ui/organisms/videos.organism"
import Statistic from "../ui/organisms/statistic.organism"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const [imgVisiMisi, setImgVisiMisi] = useState('');
    const [imgPengurus, setImgPengurus] = useState('');
    useEffect(() => {
        axios.get('https://cusauansibarrung.arcanamedia.net/api/visi-misi').then((response) => {
            setImgVisiMisi(response.data.data.image_url);
        });
        axios.get('https://cusauansibarrung.arcanamedia.net/api/profil-pengurus').then((response) => {
            setImgPengurus(response.data.data.image_url);
        });
    }, []);
    return (
        <>
            <Carousel />
            <Blog />
            <Image src={imgVisiMisi} maxW={{base: 'full', md:'6xl'}} mx={'auto'} />
            <Heading my={12} textAlign={'center'}>Struktur Pengurus & Pengawas</Heading>
            <Image src={imgPengurus} maxW={{base: 'full', md:'6xl'}} mx={'auto'} />
            <Videos />
            <Statistic />
            <Container maxW={'6xl'} py={6}>
                <Flex flexDirection={{base: 'column'}} gap={6} justifyContent={'center'} alignItems={'center'}>
                    <VStack width={{base: 'full'}}>
                        <Feature />
                    </VStack>
                    <VStack spacing={12} width={{base: 'full'}}>
                        <Heading fontSize={{ base: '2xl', sm: '4xl' }} mb={6} textAlign={'center'}>Kalkulator Kredit</Heading>
                        <Flex flexDirection={{base: 'column', md:'row'}} justifyContent={'space-around'} alignItems={'center'} w={'full'} gap={{base: 16, md: 0}}>
                            <Link to={'/kalkulator'}>
                                <Image src={imgKalkulatorMenurun} width={{base: 32, md:48}} />
                            </Link>
                            <Link to={'/kalkulator'}>
                                <Image src={imgKalkulatorTetap} width={{base: 32, md:48}} />
                            </Link>
                        </Flex>
                    </VStack>
                </Flex>
            </Container>
        </>
    )
}