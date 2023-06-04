import { AspectRatio, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface videoType {
    title: string,
    slug: string,
    image_url: string,
    date_id: string,
}

export default function Videos() {
    const [video, setVideo] = useState<videoType[]>([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_ENDPOINT}gallery-video`).then((respponse) => {
            setVideo(respponse.data.data.data)
        }).catch((error) => console.log(error));
    });

    return (
        <Container maxW={'6xl'} py={5}>
            <Heading textAlign={'center'} my={'4'}>Video Kegiatan</Heading>
            <SimpleGrid columns={{base: 1, md:2}} spacing={10}>
                {
                    video.map((result, index) =>
                        <AspectRatio key={index} ratio={1} maxW={'full'} height={'320px'} rounded={'lg'}>
                            <iframe
                                src={result.image_url}
                                allowFullScreen
                                style={{borderRadius: '32px'}}
                            />
                        </AspectRatio>
                    )
                }
                {/* <AspectRatio ratio={1} maxW={'full'} height={'320px'} rounded={'lg'}>
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
                </AspectRatio> */}
            </SimpleGrid>
        </Container>
    )
}