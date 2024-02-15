import { AspectRatio, Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface videoType {
    title: string,
    slug: string,
    video_url: string,
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
                        <AspectRatio maxW='560px' ratio={1} height={'320px'}>
                            <iframe
                                title='video'
                                src={result.video_url}
                                allowFullScreen
                                style={{borderRadius: '32px'}}
                            />
                        </AspectRatio>
                    )
                }
            </SimpleGrid>
        </Container>
    )
}