import { AspectRatio, Container, Heading, SimpleGrid } from "@chakra-ui/react";

export default function Videos() {
    return (
        <Container maxW={'6xl'} py={5}>
            <Heading textAlign={'center'} my={'4'}>Video Kegiatan</Heading>
            <SimpleGrid columns={{base: 1, md:2}} spacing={10}>
                <AspectRatio ratio={1} maxW={'full'} height={'320px'} rounded={'lg'}>
                    <iframe
                        src='https://www.youtube.com/embed/W071ozUXZDw'
                        allowFullScreen
                        style={{borderRadius: '32px'}}
                    />
                </AspectRatio>
                <AspectRatio ratio={1} maxW={'full'} height={'320px'} rounded={'lg'}>
                    <iframe
                        src='https://www.youtube.com/embed/_CbTcFbICwk'
                        allowFullScreen
                        style={{borderRadius: '32px'}}
                    />
                </AspectRatio>
                <AspectRatio ratio={1} maxW={'full'} height={'320px'} rounded={'lg'}>
                    <iframe
                        src='https://www.youtube.com/embed/sIyBIZJWAsY'
                        allowFullScreen
                        style={{borderRadius: '32px'}}
                    />
                </AspectRatio>
                <AspectRatio ratio={1} maxW={'full'} height={'320px'} rounded={'lg'}>
                    <iframe
                        src='https://www.youtube.com/embed/Wxb7gnRgcN4'
                        allowFullScreen
                        style={{borderRadius: '32px'}}
                    />
                </AspectRatio>
            </SimpleGrid>
        </Container>
    )
}