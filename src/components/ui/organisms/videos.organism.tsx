import { AspectRatio, Container, Heading, SimpleGrid } from "@chakra-ui/react";

export default function Videos() {
    return (
        <Container maxW={'6xl'} py={5}>
            <Heading textAlign={'center'} my={'4'}>Video Kegiatan</Heading>
            <SimpleGrid columns={2} spacing={10}>                
                <AspectRatio ratio={1} maxW={'full'} height={'320px'} rounded={'lg'}>
                    <iframe
                        title='naruto'
                        src='https://www.youtube.com/embed/W071ozUXZDw'
                        allowFullScreen
                    />
                </AspectRatio>
                <AspectRatio ratio={1} maxW={'full'} height={'320px'} rounded={'lg'}>
                    <iframe
                        title='naruto'
                        src='https://www.youtube.com/embed/_CbTcFbICwk'
                        allowFullScreen
                    />
                </AspectRatio>
                <AspectRatio ratio={1} maxW={'full'} height={'320px'} rounded={'lg'}>
                    <iframe
                        title='naruto'
                        src='https://www.youtube.com/embed/sIyBIZJWAsY'
                        allowFullScreen
                    />
                </AspectRatio>
                <AspectRatio ratio={1} maxW={'full'} height={'320px'} rounded={'lg'}>
                    <iframe
                        title='naruto'
                        src='https://www.youtube.com/embed/Wxb7gnRgcN4'
                        allowFullScreen
                    />
                </AspectRatio>
            </SimpleGrid>
        </Container>
    )
}