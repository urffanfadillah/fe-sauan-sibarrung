import Feature from "../ui/organisms/feature.organism"
import Carousel from "../ui/organisms/carousel.organism"
import Blog from "../ui/organisms/blog.organism"
import { Container, Flex, Heading, Image, VStack } from "@chakra-ui/react"
import imgVisiMisi from "../../assets/images/Visi dan Misi utk website.png";
import imgPengurus from "../../assets/images/Pengurus utk website.png";
import imgKalkulatorMenurun from "../../assets/images/Kalkulator Bunga Menurun.png"
import imgKalkulatorTetap from "../../assets/images/Kalkulator setoran tetap.png"
import { Link } from "react-router-dom"
import Videos from "../ui/organisms/videos.organism"
import Statistic from "../ui/organisms/statistic.organism"

export default function Home() {
    return (
        <>
            <Carousel />
            <Blog />
            <Image src={imgVisiMisi} width={'full'} />
            <Heading my={12} textAlign={'center'}>Struktur Pengurus & Pengawas</Heading>
            <Image src={imgPengurus} width={'full'} />
            <Videos />
            <Statistic />
            <Container maxW={'6xl'} py={6}>
                <Flex flexDirection={{base: 'column', md:'row'}} gap={6}>
                    <VStack spacing={12} width={{base: 'full', md: '40%'}}>
                        <Heading fontSize={'md'} mb={6} textAlign={'center'}>Kalkulator Kredit</Heading>
                        <Flex flexDirection={{base: 'column', md:'row'}} gap={4}>
                            <Link to={'/kalkulator'}>
                                <Image src={imgKalkulatorMenurun} width={{base: 20, md:32}} />
                            </Link>
                            <Link to={'/kalkulator'}>
                                <Image src={imgKalkulatorTetap} width={{base: 20, md:32}} />
                            </Link>
                        </Flex>
                    </VStack>
                    <VStack width={{base: 'full', md: '60%'}}>
                        <Feature />
                    </VStack>
                </Flex>
            </Container>
        </>
    )
}